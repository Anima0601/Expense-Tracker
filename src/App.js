
import ExpenseData from "./components/Expenses/ExpensesData";
import NewExpense from "./components/NewExpense/NewExpense";
import React,{useState} from "react";


const dummyExpenses = [
   {  id:'e1',
      title: 'Car Insurance',
      amount: 246.7,
      date: new Date(2021,2,28)
   },

   {   id:'e2',
      title: 'Petrol',
      amount: 2146.1,
      date: new Date(2022,3,8)
   },

   {   id:'e3',
      title: 'Shopping',
      amount: 422.5,
      date: new Date(2020,7,2)
   },

   {   id:'e4',
      title: 'Electricity',
      amount: 1697.32,
      date: new Date(2020,5,6)
   },
]


function App() {

   const[expenses , setExpense]=useState(dummyExpenses)
 
 
 function addExpenseHandler(expense){
 setExpense((prevExpense)=>{
   return[expense , ...prevExpense];
});
 };
  return (
    <div>
      <NewExpense onAddExpense= {addExpenseHandler}/>
      <ExpenseData item = {expenses}></ExpenseData>
    </div>
  );
}

export default App;
