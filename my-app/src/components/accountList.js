import React from "react";
import { useSelector } from "react-redux";

export function AccountList() {
  const account = useSelector((state) => state.accounts);

  return (
    <>
      <h2 className="sr-only">Accounts</h2>
      {account.accounts &&
        account.accounts.map((acc, index) => (
          <section
            className="account"
            key={index}
          >
            <div className="account-content-wrapper">
              <h3 className="account-title">{acc.title}</h3>
              <p className="account-amount">{acc.money}</p>
              <p className="account-amount-description">{acc.balanceType}</p>
            </div>
            <div className="account-content-wrapper cta">
              <button className="transaction-button">
                View transactions
              </button>
            </div>
          </section>
        ))}
    </>
  );
}
