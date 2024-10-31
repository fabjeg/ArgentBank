import { useState } from "react";
import { useSelector } from "react-redux";
import { Collapse } from "../components/collapse";
import "../styles/main.css";

export function BankAccount({ setIsUserInfoVisible }) {
  const [activeAccountIndex, setActiveAccountIndex] = useState(null);
  const accounts = useSelector((state) => state.accounts.accounts);

  const handleShowCollapses = (index) => {
    setActiveAccountIndex(index);
    setIsUserInfoVisible(false);
  };

  const handleBack = () => {
    setActiveAccountIndex(null);
    setIsUserInfoVisible(true);
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
              accountId={
                accounts[activeAccountIndex]?.accountDetails?.accountNumber
              }
            />
          </div>
        </div>
      )}
    </div>
  );
}
