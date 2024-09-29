import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAccounts } from "../actions/get.action";
import { useNavigate } from "react-router-dom";

export function BankAccount() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const accounts = useSelector((state) => state.acc?.accounts?.accounts);

  useEffect(() => {
    dispatch(getAccounts());
  }, [dispatch]);

  const handleClick = (id) => {
    navigate(`/BankAccountDetails/${id}`);
  };
  if (!accounts || accounts.length === 0) {
    return <div>Aucun compte disponible</div>;
  }
  return (
    <div>
      <div className="account-windows">
        {/* Compte 1 */}
        <div className="account-window">
          <div className="account-info">
            <p>
              Argent Bank (
              {accounts[0]?.account1?.accountDetails?.accountNumber})
            </p>
            <p className="text-account">
              $ {accounts[0]?.account1?.accountDetails?.accountBalance}
            </p>
            <p>
              {accounts[0]?.account1?.transactions?.length} Available Balance
            </p>
          </div>
          <div
            className="container-chevron"
            onClick={() => handleClick("account1")}
          >
            <span className={"fa-solid fa-chevron-right"}></span>
          </div>
        </div>

        {/* Compte 2 */}
        <div className="account-window">
          <div className="account-info">
            <p>
              Argent Bank (
              {accounts[0]?.account2?.accountDetails?.accountNumber})
            </p>
            <p className="text-account">
              $ {accounts[0]?.account2?.accountDetails?.accountBalance}
            </p>
            <p>
              {accounts[0]?.account2?.transactions?.length} Available Balance
            </p>
          </div>
          <div
            className="container-chevron"
            onClick={() => handleClick("account2")}
          >
            <span className={"fa-solid fa-chevron-right"}></span>
          </div>
        </div>

        {/* Compte 3 */}
        <div className="account-window">
          <div className="account-info">
            <p>
              Argent Bank (
              {accounts[0]?.account3?.accountDetails?.accountNumber})
            </p>
            <p className="text-account">
              $ {accounts[0]?.account3?.accountDetails?.accountBalance}
            </p>
            <p>
              {accounts[0]?.account3?.transactions?.length} Available Balance
            </p>
          </div>
          <div
            className="container-chevron"
            onClick={() => handleClick("account3")}
          >
            <span className={"fa-solid fa-chevron-right"}></span>
          </div>
        </div>
      </div>
    </div>
  );
}
