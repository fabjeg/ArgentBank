import { createSlice } from "@reduxjs/toolkit";
import transactions from "../data/transactions.json";

const accountsSlice = createSlice({
  name: "accounts",
  initialState: transactions,
  reducers: {
    updateTransactionCategory: (state, action) => {
      const { accountId, transactionId, category } = action.payload;
      const account = state.find(
        (acc) => acc.accountDetails.accountNumber === accountId
      );
      if (account) {
        const transaction = account.transactions.find(
          (trx) => trx.id === transactionId
        );
        if (transaction) {
          transaction.transactionCategory = category;
        }
      }
    },
    updateTransactionNote: (state, action) => {
      const { accountId, transactionId, note } = action.payload;
      const account = state.find(
        (acc) => acc.accountDetails.accountNumber === accountId
      );
      if (account) {
        const transaction = account.transactions.find(
          (trx) => trx.id === transactionId
        );
        if (transaction) {
          transaction.transactionNote = note;
        }
      }
    },
  },
});

export const { updateTransactionCategory, updateTransactionNote } =
  accountsSlice.actions;
export default accountsSlice.reducer;
