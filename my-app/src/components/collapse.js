import { useState } from "react";
import { useDispatch } from "react-redux";
import { DropDownMenu } from "../components/drop-down";
import {
  updateTransactionCategory,
  updateTransactionNote,
} from "../features/accountSlice";
import "../styles/collapse.min.css";

export function Collapse({ transactions: initialTransactions, accountId }) {
  const dispatch = useDispatch();
  const [transactions, setTransactions] = useState(initialTransactions);
  const [openIndex, setOpenIndex] = useState(null);
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const [noteInput, setNoteInput] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);

  const toggleCollapse = (index) => {
    setOpenIndex(openIndex === index ? null : index);
    setIsDropDownOpen(false);
    setEditingIndex(null);
  };

  const handleCategoryClick = () => {
    setIsDropDownOpen(!isDropDownOpen);
  };

  const handleCategorySelect = (category) => {
    if (openIndex !== null) {
      const transactionId = transactions[openIndex].id;
      const updatedTransactions = transactions.map((transaction, idx) =>
        idx === openIndex
          ? { ...transaction, transactionCategory: category }
          : transaction
      );
      setTransactions(updatedTransactions);
      dispatch(
        updateTransactionCategory({ accountId, transactionId, category })
      );
      setIsDropDownOpen(false);
    }
  };

  const handleNoteEdit = (index) => {
    setEditingIndex(index);
    setNoteInput(transactions[index].transactionNote || "");
  };

  const handleNoteSave = () => {
    if (editingIndex !== null) {
      const transactionId = transactions[editingIndex].id;
      const updatedTransactions = transactions.map((transaction, idx) =>
        idx === editingIndex
          ? { ...transaction, transactionNote: noteInput }
          : transaction
      );
      setTransactions(updatedTransactions);
      dispatch(
        updateTransactionNote({ accountId, transactionId, note: noteInput })
      );
      setEditingIndex(null);
    }
  };

  return (
    <div className="collapse-container">
      {transactions.length > 0 ? (
        <ul className="transaction-list">
          {transactions.map((transaction, index) => (
            <li
              key={transaction.id}
              className="transaction-item"
            >
              <div
                className={`transaction-summary ${
                  openIndex === index ? "open" : ""
                }`}
                onClick={() => toggleCollapse(index)}
              >
                <p>{transaction.date}</p>
                <p>{transaction.description}</p>
                <p>{transaction.transactionAmount}</p>
                <p>{transaction.balanceAfterTransaction}</p>
                <span
                  className={`fa-solid ${
                    openIndex === index ? "fa-chevron-up" : "fa-chevron-down"
                  }`}
                />
              </div>
              {openIndex === index && (
                <div className="transaction-details">
                  <div className="transaction-type">
                    <p>Transaction type</p>
                    <p className="type">{transaction.transactionType}</p>
                  </div>
                  <div className="transaction-category">
                    <p>Category</p>
                    <p className="category">
                      {transaction.transactionCategory}
                      <span
                        className="fa-solid fa-pencil"
                        onClick={handleCategoryClick}
                      />
                    </p>
                    {isDropDownOpen && (
                      <DropDownMenu onSelectCategory={handleCategorySelect} />
                    )}
                  </div>
                  <div className="transaction-note">
                    <p>Note</p>
                    {editingIndex === index ? (
                      <div className="containerNote">
                        <input
                          className="inputNote"
                          type="text"
                          value={noteInput}
                          onChange={(e) => setNoteInput(e.target.value)}
                          placeholder="Saisissez une note"
                        />
                        <button
                          className="buttonNote"
                          onClick={handleNoteSave}
                        >
                          Save
                        </button>
                      </div>
                    ) : (
                      <p className="note">
                        {transaction.transactionNote || "Aucune note"}
                        <span
                          className="fa-solid fa-pencil"
                          onClick={() => handleNoteEdit(index)}
                        />
                      </p>
                    )}
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <p>Aucune transaction disponible</p>
      )}
    </div>
  );
}
