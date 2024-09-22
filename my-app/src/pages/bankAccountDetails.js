import { Collapse } from "../components";
import { BankAccount } from "../components/bankAccount";

export function BankAccountDetail() {
  return (
    <div>
      <BankAccount />
      <div className="container">
        <div className="container-p">
          <p>Date</p>
          <p>Descripton</p>
          <p>Amount</p>
          <p>Balance</p>
        </div>
      </div>
      <div className="container-page-collapse">
        <Collapse id="collapse1" />
        <Collapse id="collapse2" />
        <Collapse id="collapse3" />
        <Collapse id="collapse4" />
        <Collapse id="collapse5" />
      </div>
    </div>
  );
}
