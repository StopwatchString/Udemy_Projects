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

  return (
    <Card className="expenses">
      <ExpensesFilter
        filterYear={filterYear}
        onFilterSet={onFilterSetHandler}
      />
      {props.expenses.map((expense) => {
        if (expense.date.getFullYear() === filterYear) {
          return (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          );
        } else {
          return null;
        }
      })}
    </Card>
  );
};

export default ExpensesList;
