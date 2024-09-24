import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCategory, selectCategoryItem } from "../actions/get.action";
import { toggleCollapse } from "../actions/toggle.action";
import "../styles/drop-down.css";

export function DropDownMenu({ id }) {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.collapse[id] || false);
  const category = useSelector((state) => state.categ.items);
  const dropDownRef = useRef(null);

  useEffect(() => {
    dispatch(selectCategory());
  }, [dispatch]);

  const handleCategoryClick = (category) => {
    dispatch(selectCategoryItem(category));
  };

  const toggle = () => {
    dispatch(toggleCollapse(id));
  };

  return (
    <div
      className="dropdown"
      ref={dropDownRef}
    >
      <span
        className="fa-solid fa-pencil"
        onClick={toggle}
      />
      {isOpen && (
        <div className={`dropdown-menu ${isOpen ? "open" : "closed"}`}>
          {category.map((item, index) => (
            <div
              key={index}
              onClick={() => handleCategoryClick(item)}
              className="dropdown-item"
            >
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
