import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { logout } from "./authSlice";

const initialState = {
  userName: "",
  firstName: "",
  lastName: "",
  status: "idle",
  error: null,
};

export const getUser = createAsyncThunk(
  "user/getUser",
  async (_, { getState }) => {
    const token = getState().auth.accessToken;
    const response = await fetch("http://localhost:3001/api/v1/user/profile", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    if (data && data.body) {
      return data.body;
    } else {
      throw new Error("Données utilisateur invalides");
    }
  }
);

export const updateUser = createAsyncThunk(
  "user/updateUser",
  async (userName, { getState }) => {
    const token = getState().auth.accessToken;
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
    return data.body;
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUser.fulfilled, (state, action) => {
        state.userName = action.payload.userName;
        state.firstName = action.payload.firstName;
        state.lastName = action.payload.lastName;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.userName = action.payload.userName;
      })
      .addCase(logout, () => {
        return initialState;
      });
  },
});

export default userSlice.reducer;
