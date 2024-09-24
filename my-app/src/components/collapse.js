import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef } from "react";
import { toggleCollapse } from "../actions/toggle.action";
import { DropDownMenu } from "./drop-down";
import "../styles/collapse.css";
import "../styles/main.css";

export function Collapse({ id }) {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.collapse[id] || false);
  const selectedCategory = useSelector((state) => state.categ.selectCategory);
  const contentRef = useRef(null);

  useEffect(() => {
    if (contentRef.current) {
      const scrollHeight = contentRef.current.scrollHeight;
      contentRef.current.style.maxHeight = isOpen ? `${scrollHeight}px` : "0px";
    }
  }, [isOpen]);

  const toggle = () => {
    dispatch(toggleCollapse(id));
  };

  return (
    <div>
      <div className="container-button">
        <button
          className={`collapse-button ${isOpen ? "collapse-button-open" : ""}`}
        >
          <p>27/02/20</p>
          <p>Golden Sun Bakery</p>
          <p>$8.00</p>
          <p>$298.00</p>
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
          <label>
            <p>Category</p>
            <input
              type="text"
              className="container-input"
              value={selectedCategory}
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
