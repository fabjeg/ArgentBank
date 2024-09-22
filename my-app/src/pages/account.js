import { BankAccount, UserInfo } from "../components";

export function Account() {
  return (
    <div>
      <UserInfo />
      <BankAccount />
      <BankAccount />
      <BankAccount />
    </div>
  );
}
