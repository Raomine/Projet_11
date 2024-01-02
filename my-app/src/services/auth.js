const baseURL = `https://mk3smj-3001.csb.app`;

export const login = async (email, password) => {
  try {
    const response = await fetch(`${baseURL}/user/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    if (!response.ok) {
      throw new Error("Email ou mot de passe incorrect.");
    }
    const data = await response.json();
    if (data && data.body && data.body.token) {
      const token = data.body.token;
      localStorage.setItem("token", token);
      return token;
    } else {
      throw new Error("token indéfini ou invalide");
    }
  } catch (error) {
    return Promise.reject(error);
  }
};
