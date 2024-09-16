export const GET_USER = "GET_USER";
export const UPDATE_USER = "UPDATE_USER";

export const getUser = () => {
  return async (dispatch) => {
    try {
      const token = localStorage.getItem("accessToken");

      const response = await fetch(
        "http://localhost:3001/api/v1/user/profile",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = await response.json();
      console.log(data);
      dispatch({ type: GET_USER, payload: data.body });
    } catch (error) {
      console.log(error);
    }
  };
};
export const updateUser = (userName) => async (dispatch) => {
  const token = localStorage.getItem("accessToken");
  const response = await fetch("http://localhost:3001/api/v1/user/profile", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ userName }),
  });
  if (!response.ok) {
    throw new Error("Erreur lors de la mise à jour du profil utilisateur");
  }
  const data = await response.json();
  dispatch({ type: UPDATE_USER, payload: data.body });
};
