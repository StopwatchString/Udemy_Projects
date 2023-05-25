import "./NewExpense.css";
import ExpenseForm from "../ExpenseForm/ExpenseForm";
import { v4 as uuidv4 } from 'uuid';
const NewExpense = (props) => {

  const onSaveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: uuidv4(),
    }
  
    props.onAddExpense(expenseData);
  }

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
