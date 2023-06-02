import React,{useState} from 'react';
import './NewExpense.css';

import ExpenseForm from './ExpenseForm';
function NewExpense(props){
const[isEditing , setIsEditing] = useState(false);

    function savedExpenseDataHandler(enteredExpenseData){
        const expenseData = {
            ...enteredExpenseData,

        }
      props.onAddExpense(expenseData);
      setIsEditing(false);
    };

   function openingExpenseHandler(){
    setIsEditing(true);
   };

   function stopEditingHandler(){
    setIsEditing(false);
   }

return(
    <div className='new-expense'>
    {!isEditing && <button onClick={openingExpenseHandler}>Add New Expenses</button>}
    {isEditing && <ExpenseForm onSaveExpenseData = {savedExpenseDataHandler} onCancel = {stopEditingHandler}/>} 
    </div>
)
};

export default NewExpense