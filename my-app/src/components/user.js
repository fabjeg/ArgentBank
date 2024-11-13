import { useSelector, useDispatch } from "react-redux";
import "../styles/main.min.css";
import { UserInfo } from "./userInfo";
import { useState, useEffect } from "react";
import { getUser } from "../features/userSlice";

export function User() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const account = useSelector((state) => state.accounts);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  const handleEditClick = () => {
    setShowForm(true);
  };

  const handleCancelClick = () => {
    setShowForm(false);
  };

  return (
    <div>
      <main className="main bg-dark">
        {!showForm && (
          <div className="header">
            <h1>
              Welcome back
              <br />
              {user.userName}!
            </h1>
            <button
              className="edit-button"
              onClick={handleEditClick}
            >
              Edit Name
            </button>
          </div>
        )}
        <h2 className="sr-only">Accounts</h2>
        {showForm && <UserInfo onCancel={handleCancelClick} />}
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
      </main>
    </div>
  );
}
