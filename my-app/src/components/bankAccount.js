import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { accountUser } from "../actions/get.action";
import { selectAccountInfo } from "../components/Selector";

export function BankAccount() {
  const dispatch = useDispatch();

  const accountInfo = useSelector((state) => {
    return selectAccountInfo(state);
  });

  useEffect(() => {
    dispatch(accountUser());
  }, [dispatch]);

  return (
    <div className="container-account">
      <div className="container-info">
        <p>
          {accountInfo.accountTitle} ({accountInfo.accountNumber})
        </p>
        <p className="account-pay">{accountInfo.accountPay}</p>
        <p>{accountInfo.availableBalance}</p>
      </div>
      <div className="container-chevron">
        <span className="fa-solid fa-chevron-right"></span>
      </div>
    </div>
  );
}
