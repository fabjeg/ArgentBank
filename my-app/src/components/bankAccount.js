import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { accountUser } from "../actions/get.action";
import { selectAccountInfo } from "../components/Selector";
import { useNavigate, useLocation } from "react-router-dom";

export function BankAccount() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const accountInfo = useSelector((state) => {
    return selectAccountInfo(state);
  });

  useEffect(() => {
    dispatch(accountUser());
  }, [dispatch]);

  const handleClick = () => {
    if (location.pathname === "/BankAccountDetails") {
      navigate("/Account");
    } else {
      navigate("/BankAccountDetails");
    }
  };

  const isDetailPage = location.pathname === "/BankAccountDetails";

  return (
    <div className="container-account">
      <div className="container-info">
        <p>
          {accountInfo.accountTitle} ({accountInfo.accountNumber})
        </p>
        <p className="account-pay">{accountInfo.accountPay}</p>
        <p>{accountInfo.availableBalance}</p>
      </div>
      <div
        className="container-chevron"
        onClick={handleClick}
      >
        <span
          className={
            isDetailPage ? "fa-solid fa-xmark" : "fa-solid fa-chevron-right"
          }
        ></span>
      </div>
    </div>
  );
}
