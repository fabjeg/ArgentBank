import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCategory, selectCategoryItem } from "../actions/get.action";
import { toggleCollapse } from "../actions/toggle.action";

export function DropDownMenu({ id }) {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.toggle.collapse[id] || false);
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
    <div ref={dropDownRef}>
      <span
        className="fa-solid fa-pencil"
        onClick={toggle}
      />
      {isOpen && (
        <div>
          {category.map((category, index) => (
            <div
              key={index}
              onClick={() => handleCategoryClick(category)}
            >
              {category}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
