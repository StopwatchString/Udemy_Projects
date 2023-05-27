import { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import ExpensesList from "../ExpensesList/ExpensesList";
import ExpensesChart from "../ExpensesChart/ExpensesChart";

const Expenses = (props) => {
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
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList expenses={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
