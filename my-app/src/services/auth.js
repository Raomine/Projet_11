const baseURL = `https://mk3smj-3001.csb.app`;

export const login = async (email, password) => {
  try {
    const response = await fetch(`${baseURL}/user/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      throw new Error("Erreur lors de la connexion.");
    }

    return response.json();
  } catch (error) {
    return Promise.reject(error);
  }
};
