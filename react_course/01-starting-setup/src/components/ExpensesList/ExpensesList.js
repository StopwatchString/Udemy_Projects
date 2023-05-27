import ExpenseItem from "../ExpenseItem/ExpenseItem";
import { useState } from "react";
import "./ExpensesList.css";
import Card from "../UI/Card";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";

const ExpensesList = (props) => {
  const [filterYear, setFilterYear] = useState(2021);

  const onFilterSetHandler = (newFilterYear) => {
    setFilterYear(newFilterYear);
  };

  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear() === filterYear;
  });

  let expensesContent = <p>No expenses found.</p>;

  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }

  return (
    <Card className="expenses">
      <ExpensesFilter
        filterYear={filterYear}
        onFilterSet={onFilterSetHandler}
      />
      {expensesContent}
    </Card>
  );
};

export default ExpensesList;
