import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const initialExpenses = [
  {
    id: uuidv4(),
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: uuidv4(),
    title: "New TV",
    amount: 799.49,
    date: new Date(2021, 2, 12),
  },
  {
    id: uuidv4(),
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: uuidv4(),
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(initialExpenses);

  const onAddExpenseHandler = (newExpense) => {
    setExpenses((prevState) => {
      return [...prevState, newExpense].sort((a, b) => a.date - b.date);
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={onAddExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
};

export default App;
