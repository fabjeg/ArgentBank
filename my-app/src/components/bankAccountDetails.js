export function BankAccountDetails({
  account,
  index,
  selectedAccount,
  onToggle,
}) {
  const handleToggle = () => {
    onToggle(index);
  };
  return (
    <div className="account-window">
      {selectedAccount === null || selectedAccount === index ? (
        <div className="account-info">
          <p>Argent Bank ({account?.accountDetails?.accountNumber})</p>
          <p className="text-account">
            $ {account?.accountDetails?.accountBalance}
          </p>
          <p>{account?.transactions?.length} Available Balance</p>

          <span
            className="fa-solid fa-chevron-right"
            onClick={handleToggle}
          ></span>
        </div>
      ) : null}
      {selectedAccount === index && (
        <div className="collapse">
          <h3>Transactions</h3>
          {account.transactions.map((transaction, i) => (
            <div key={i}>
              <p>Date: {transaction.date}</p>
              <p>Amount: {transaction.transactionAmount}</p>
              <p>Balance: {transaction.balanceAfterTransaction}</p>
              <p>Description: {transaction.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
