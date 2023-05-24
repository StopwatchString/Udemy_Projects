import ExpenseItem from "../ExpenseItem/ExpenseItem";
import "./ExpensesList.css";
import Card from "../UI/Card";

const ExpensesList = (props) => {
  return (
    <Card className="expenses">
      {props.expenses.map((expense) => {
        return (
          <ExpenseItem
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
