const baseURL = `https://mk3smj-3001.csb.app`;

export const signup = async (
  email,
  password,
  firstName,
  lastName,
  userName,
) => {
  try {
    console.log("Sending signup request with data:", {
      email,
      password,
      firstName,
      lastName,
      userName,
    });

    const response = await fetch(`${baseURL}/user/signup`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        password,
        firstName,
        lastName,
        userName,
      }),
    });

    console.log("Response from server:", response);

    // Reste du code...
  } catch (error) {
    console.error("Error during signup:", error);
    return Promise.reject(error);
  }
};
