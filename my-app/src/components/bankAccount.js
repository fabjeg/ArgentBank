import { useState } from "react";
import transactions from "../data/transactions.json";
import { Collapse } from "../components/collapse";
import "../styles/main.css";

export function BankAccount({ setIsUserInfoVisible }) {
  const accounts = transactions;
  const [activeAccountIndex, setActiveAccountIndex] = useState(null);

  const handleShowCollapses = (index) => {
    setActiveAccountIndex(index);
    setIsUserInfoVisible(false); // Cacher UserInfo quand un chevron est cliqué
  };

  const handleBack = () => {
    setActiveAccountIndex(null);
    setIsUserInfoVisible(true); // Réafficher UserInfo quand on revient
  };

  return (
    <div className="account-container">
      {activeAccountIndex === null ? (
        <div className="account-windows">
          {accounts.map((account, index) => (
            <div
              key={index}
              className="account-window"
              onClick={() => handleShowCollapses(index)}
            >
              <div className="account-info">
                <p>Argent Bank ({account?.accountDetails?.accountNumber})</p>
                <p className="text-account">
                  $ {account?.accountDetails?.accountBalance}
                </p>
                <p>{account?.transactions?.length} Transactions disponibles</p>
              </div>
              <span className="fa-solid fa-chevron-right"></span>
            </div>
          ))}
        </div>
      ) : (
        <div className="account-details-container">
          <div className="account-window">
            <div className="account-info">
              <p>
                Argent Bank (
                {accounts[activeAccountIndex]?.accountDetails?.accountNumber})
              </p>
              <p className="text-account">
                $ {accounts[activeAccountIndex]?.accountDetails?.accountBalance}
              </p>
              <p>
                {accounts[activeAccountIndex]?.transactions?.length}{" "}
                Transactions disponibles
              </p>
            </div>
            <div
              className="back-button"
              onClick={handleBack}
            >
              <span className="fa-solid fa-xmark"></span>
            </div>
          </div>
          <div className="transaction-headers">
            <p>Date</p>
            <p>Description</p>
            <p>Amount</p>
            <p>Balance</p>
          </div>
          <div className="collapses-container">
            <Collapse
              transactions={accounts[activeAccountIndex].transactions}
            />
          </div>
        </div>
      )}
    </div>
  );
}
