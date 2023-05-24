import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";
import Card from "./Card";

export default function ExpensesList(props) {
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
}
