const baseUrl = "";

export const login = async (username, password) => {
  try {
    const response = await fetch(`${baseURL}/api/user`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    return response.json();
  } catch (error) {
    return Promise.reject(error);
  }
};
