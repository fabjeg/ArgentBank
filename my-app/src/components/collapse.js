import { useDispatch, useSelector } from "react-redux";
import { useRef, useState } from "react";
import { toggleCollapse } from "../actions/toggle.action";
import "../styles/collapse.css";
import "../styles/main.css";
import { DropDownMenu } from "./index";

import { updateAccountNote } from "../actions/get.action";

export function Collapse({ id, transaction }) {
  const dispatch = useDispatch();
  const inputNote = useRef();
  const isOpen = useSelector((state) => state.collapse[id] || false);
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const [isEditingNote, setIsEditingNote] = useState(false);
  const [noteValue, setNoteValue] = useState(transaction.transactionNote);
  const [selectedCategory, setSelectedCategory] = useState(
    transaction.transactionCategory || ""
  );

  const toggle = () => {
    dispatch(toggleCollapse(id));
    setIsDropDownOpen(false);
  };

  const handleCategoryPencilClick = () => {
    setIsDropDownOpen(!isDropDownOpen);
  };

  const handleNotePencilClick = () => {
    setIsEditingNote(true);
  };

  const handleNoteChange = (e) => {
    setNoteValue(e.target.value);
  };

  const handleSaveClick = () => {
    const postNote = {
      transaction_id: transaction._id,
      transactionNote: noteValue,
    };

    dispatch(
      updateAccountNote(postNote.transactionNote, postNote.transaction_id)
    );
    setIsEditingNote(false);
  };

  return (
    <div>
      <div className="container-button">
        <button
          className={`collapse-button ${isOpen ? "collapse-button-open" : ""}`}
          onClick={toggle}
        >
          <p>{transaction.date}</p>
          <p>{transaction.description}</p>
          <p>$ {transaction.transactionAmount}</p>
          <p>$ {transaction.balanceAfterTransaction}</p>
          <span
            className={`fa-solid fa-chevron-up chevron ${
              isOpen ? "rotate" : ""
            }`}
          />
        </button>
      </div>
      <div className={`container-toggle ${isOpen ? "open" : ""}`}>
        <div className="toggle">
          <p>Transaction type</p>
          <p>Category</p>
          <p>Note</p>
        </div>
        <div className="container-input">
          <input
            type="text"
            className="input-toggle"
            value="Electronic"
            readOnly
          />
          <div className="pencil">
            <input
              type="text"
              className="input-toggle"
              value={selectedCategory}
              readOnly
            />
            <span
              className="fa-solid fa-pencil"
              onClick={handleCategoryPencilClick}
            />
          </div>
          <div className="pencil">
            <input
              ref={inputNote}
              type="text"
              className="input-toggle"
              value={noteValue}
              onChange={handleNoteChange}
              readOnly={!isEditingNote}
            />
            <span
              className="fa-solid fa-pencil"
              onClick={handleNotePencilClick}
            />
            {isDropDownOpen && (
              <DropDownMenu onSelectCategory={setSelectedCategory} />
            )}
            {isEditingNote && (
              <button
                onClick={handleSaveClick}
                className="save-button"
              >
                Valider
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
