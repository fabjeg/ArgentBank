import { createSelector } from "reselect";

export const selectAccountState = (state) => state.acc || [];

export const selectAccountInfo = createSelector(
  [selectAccountState],
  (account) => ({
    accountTitle: account.accountTitle,
    accountNumber: account.accountNumber,
    accountPay: account.accountPay,
    availableBalance: account.availableBalance,
  })
);
