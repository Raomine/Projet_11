const baseURL = `https://mk3smj-3001.csb.app`;

export const login = async (email, password) => {
  try {
    const response = await fetch(`${baseURL}/user/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    if (response.ok) {
      const { token, email } = await response.json();
      localStorage.setItem("token", token);
      return { email, token };
    }
  } catch (error) {
    return Promise.reject(error);
  }
};
