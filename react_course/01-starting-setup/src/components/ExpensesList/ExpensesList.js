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

  return (
    <Card className="expenses">
      <ExpensesFilter
        filterYear={filterYear}
        onFilterSet={onFilterSetHandler}
      />

      {filteredExpenses.map((expense) => {
        return (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        );
      })}
    </Card>
  );
};

export default ExpensesList;
