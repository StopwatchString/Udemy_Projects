import "./NewExpense.css";
import ExpenseForm from "../ExpenseForm/ExpenseForm";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
const NewExpense = (props) => {
  const [formActive, setFormActive] = useState(false);

  const onSaveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: uuidv4(),
    };

    props.onAddExpense(expenseData);
    setFormActive(false);
  };

  const activateForm = () => {
    setFormActive(true);
  };

  const deactivateForm = () => {
    setFormActive(false);
  };

  return (
    <div className="new-expense">
      {!formActive && (
        <button onClick={activateForm} className="new-expense__actions">
          Add New Expense
        </button>
      )}
      {formActive && (
        <ExpenseForm
          onSaveExpenseData={onSaveExpenseDataHandler}
          onCancelForm={deactivateForm}
        />
      )}
    </div>
  );
};

export default NewExpense;
