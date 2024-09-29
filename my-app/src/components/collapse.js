import { useDispatch, useSelector } from "react-redux";
import { useRef } from "react";
import { toggleCollapse } from "../actions/toggle.action";
import { DropDownMenu } from "./drop-down";
import "../styles/collapse.css";
import "../styles/main.css";

export function Collapse({ id, transaction }) {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.collapse[id] || false);
  const contentRef = useRef(null);

  const toggle = () => {
    dispatch(toggleCollapse(id));
  };

  return (
    <div>
      <div className="container-button">
        <button
          className={`collapse-button ${isOpen ? "collapse-button-open" : ""}`}
        >
          <p>{transaction.date}</p>
          <p>{transaction.description}</p>
          <p>$ {transaction.transactionAmount}</p>
          <p>$ {transaction.balanceAfterTransaction}</p>
          <span
            onClick={toggle}
            className={`fa-solid fa-chevron-up chevron ${
              isOpen ? "rotate" : ""
            }`}
          />
        </button>
      </div>
      <div
        ref={contentRef}
        className={`container-toggle ${isOpen ? "open" : ""}`}
      >
        <div className="toggle">
          <label>
            <p>Transaction type</p>
            <input
              type="text"
              className="container-input"
              value="Electronic"
              readOnly
            />
            <span className="fa-solid fa-pencil pencil" />
          </label>
          <label className="category">
            <p>Category</p>
            <input
              type="text"
              className="container-input"
              readOnly
            />
            <DropDownMenu id={`toggleCollapse-${id}`} />
          </label>
          <label>
            <p>Note</p>
            <input
              type="text"
              className="container-input"
            />
            <span className="fa-solid fa-pencil" />
          </label>
        </div>
      </div>
    </div>
  );
}
