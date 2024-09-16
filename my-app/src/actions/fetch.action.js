export const GET_LOGIN = "GET_LOGIN";
export const LOGOUT = "LOGOUT";

export const logout = () => {
  return (dispatch) => {
    dispatch({ type: LOGOUT });
  };
};

export const login = (username, password) => {
  // Stockage du jeton après la connexion

  return async (dispatch) => {
    try {
      const response = await fetch("http://localhost:3001/api/v1/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: username,
          password: password,
        }),
      });
      const data = await response.json();
      console.log(data);
      localStorage.setItem("accessToken", data.body.token);

      dispatch({ type: GET_LOGIN, payload: data.body.token });
    } catch (error) {
      console.log(error);
    }
  };
};
