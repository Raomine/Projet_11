const baseURL = "localhost:3001";

export const login = async (username, password) => {
  try {
    const response = await fetch(`${baseURL}/api/v1/user/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });
    console.log({ username, password });
    return response.json();
  } catch (error) {
    return Promise.reject(error);
  }
};
