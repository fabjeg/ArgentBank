import { useDispatch, useSelector } from "react-redux";
import { toggleCollapse } from "../actions/toggle.action";
import { DropDownMenu } from "./drop-down";

export function Collapse({ id }) {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.toggle.collapse[id] || false);
  const selectedCategory = useSelector((state) => state.categ.selectCategory);

  const toggle = () => {
    dispatch(toggleCollapse(id));
  };

  return (
    <div>
      <div className="container-button">
        <button
          onClick={toggle}
          className="collapse-button"
        >
          <p>27/02/20</p>
          <p>Golden Sun Bakery</p>
          <p>$8.00</p>
          <p>$298.00</p>
        </button>
      </div>
      {isOpen && (
        <div className="container-toggle">
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
              ></input>
              <DropDownMenu id={"Drop"} />
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
      )}
    </div>
  );
}
