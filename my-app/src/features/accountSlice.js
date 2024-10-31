import { createSlice } from "@reduxjs/toolkit";
import transactions from "../data/transactions.json";

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

    updateTransactionCategory: (state, action) => {
      const { accountId, transactionId, category } = action.payload;
      state.accounts = state.accounts.map((account) => {
        if (account.accountDetails.accountNumber === accountId) {
          return {
            ...account,
            transactions: account.transactions.map((trx) =>
              trx.id === transactionId
                ? { ...trx, transactionCategory: category }
                : trx
            ),
          };
        }
        return account;
      });
    },

    updateTransactionNote: (state, action) => {
      const { accountId, transactionId, note } = action.payload;
      state.accounts = state.accounts.map((account) => {
        if (account.accountDetails.accountNumber === accountId) {
          return {
            ...account,
            transactions: account.transactions.map((trx) =>
              trx.id === transactionId ? { ...trx, transactionNote: note } : trx
            ),
          };
        }
        return account;
      });
    },
  },
});

export const {
  resetState,
  updateTransactionCategory,
  updateTransactionNote,
  getAllAccounts,
  clearAccounts,
} = accountsSlice.actions;

export default accountsSlice.reducer;
