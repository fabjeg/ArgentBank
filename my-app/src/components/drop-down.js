import { useState, useEffect } from "react";
import "../styles/drop-down.min.css";
import transactions from "../data/transactions.json";

export function DropDownMenu({ onSelectCategory, selectedCategory }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const uniqueCategories = Array.from(
      new Set(
        transactions.flatMap(
          (account) =>
            account.transactions?.map((t) => t.transactionCategory) || []
        )
      )
    );
    setCategories(uniqueCategories);
  }, []);

  const handleChange = (event) => {
    onSelectCategory(event.target.value);
  };

  return (
    <div className="container-category">
      <select
        className="select"
        value={selectedCategory || ""}
        onChange={handleChange}
      >
        <option
          value=""
          disabled
        >
          Select a category
        </option>
        {categories.map((category, index) => (
          <option
            key={index}
            value={category}
          >
            {category}
          </option>
        ))}
      </select>
    </div>
  );
}
