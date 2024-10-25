import { useState, useEffect } from "react";
import "../styles/drop-down.css";
import transactions from "../data/transactions.json";

export function DropDownMenu({ onSelectCategory }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const allAccounts = transactions;
    const allTransactions = allAccounts.flatMap(
      (account) => account.transactions || []
    );
    const uniqueCategories = [
      ...new Set(
        allTransactions.map((transaction) => transaction.transactionCategory)
      ),
    ];
    setCategories(uniqueCategories);
  }, []);

  const handleChange = (event) => {
    const selectedCategory = event.target.value;
    onSelectCategory(selectedCategory);
  };

  return (
    <div className="container-category">
      <select
        className="selecte"
        onChange={handleChange}
      >
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
