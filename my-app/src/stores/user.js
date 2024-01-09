import { configureStore } from "@reduxjs/toolkit";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getUserData, update } from "../services/user";

export const fetchUserData = createAsyncThunk(
  "user/fetchUserData",
  async (token, { rejectWithValue }) => {
    try {
      const data = await getUserData(token);
      return data;
    } catch (error) {
      console.error("Error fetching user data:", error);
      return rejectWithValue(error.message || "Failed to fetch user data");
    }
  },
);

export const updateUserName = createAsyncThunk(
  "user/updateUserName",
  async ({ token, newUserName }) => {
    try {
      const updatedData = await update(token, newUserName);
      return updatedData;
    } catch (error) {
      console.error("Error updating user name:", error);
      throw error;
    }
  },
);

const initialState = {
  token: null,
  userData: null,
  isAuthenticated: false,
  isLoading: false,
  newUserName: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
      state.isAuthenticated = true;
    },
    setUserData: (state, action) => {
      state.userData = action.payload;
    },
    signOut: (state) => {
      state.token = null;
      state.userData = null;
      state.isAuthenticated = false;
    },
    setNewUserName: (state, action) => {
      state.newUserName = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchUserData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.userData = action.payload;
      })
      .addCase(fetchUserData.rejected, (state) => {
        state.isLoading = false;
      })
      // Ajoutez les cas pour updateUserName ici
      .addCase(updateUserName.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateUserName.fulfilled, (state, action) => {
        state.userData.userName = action.payload.userName;
        state.newUserName = "";
        state.isLoading = false;
      })
      .addCase(updateUserName.rejected, (state, action) => {
        console.error("Error updating user name:", action.error);
        state.isLoadingloading = false;
      });
  },
});

export const { setToken, setUserData, signOut, setNewUserName } =
  userSlice.actions;

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
  },
});
