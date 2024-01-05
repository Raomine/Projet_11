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

    return response.json();
  } catch (error) {
    return Promise.reject(error);
  }
}

export async function update(token, newUserName) {
  try {
    const response = await fetch(`${baseURL}/user/profile`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userName: newUserName }),
    });
    if (!response.ok) {
      throw new Error("Échec de la mise à jour du nom d'utilisateur.");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    return Promise.reject(error);
  }
}
