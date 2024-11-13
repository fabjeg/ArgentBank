import { createSlice } from "@reduxjs/toolkit";
import transactions from "../data/account.json";

const initialState = {
  accounts: transactions,
};

const accountsSlice = createSlice({
  name: "accounts",
  initialState,
  reducers: {
    resetState: () => initialState,
    clearAccounts: (state) => {
      state.accounts = [];
    },
  },
});

export const { resetState, clearAccounts } = accountsSlice.actions;

export default accountsSlice.reducer;
