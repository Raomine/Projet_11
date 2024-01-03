const baseURL = `https://mk3smj-3001.csb.app`;

export async function getUserData(token) {
  try {
    const response = await fetch(`${baseURL}/user/profile`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (!response.ok) {
      throw new Error("Échec de la récupération des infos utilisateur.");
    }
    const data = await response.json();
    if (
      data &&
      data.body &&
      data.body.firstName &&
      data.body.lastName &&
      data.body.userName
    ) {
      const userData = {
        firstName: data.body.firstName,
        lastName: data.body.lastName,
        userName: data.body.userName,
      };
      return userData;
    } else {
      throw new Error(
        "La réponse du serveur ne contient pas d'infos utilisateur valide.",
      );
    }
  } catch (error) {
    return Promise.reject(error);
  }
}
