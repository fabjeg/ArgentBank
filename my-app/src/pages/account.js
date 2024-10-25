import { BankAccount, UserInfo } from "../components";
import { useState } from "react";

export function Account() {
  const [isUserInfoVisible, setIsUserInfoVisible] = useState(true);

  return (
    <div>
      {isUserInfoVisible && <UserInfo />}
      <BankAccount setIsUserInfoVisible={setIsUserInfoVisible} />
    </div>
  );
}
