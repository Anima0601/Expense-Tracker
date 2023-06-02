
import "./ExpenseData.css"
import ExpenseFilter from "../ExpenseFilter/ExpenseFilter";
import ExpensesList from "../NewExpense/ExpensesList";
import ChartExpenses from "./ChartExpenses";
import React , {useState} from 'react' ; 


function ExpenseData(props){
   const [filteredYear , setFilteredYear]=useState('2020');
   function filterChangingHandler(yearChanged){
      setFilteredYear(yearChanged);
   };

   const filteredExpenses = props.item.filter(expenses =>{
      return expenses.date.getFullYear().toString() === filteredYear;
   } );
   
 
     return(
        <div className="expenseData">
      
      <ExpenseFilter selected = {filteredYear} onFilterChange = {filterChangingHandler}/>
       
       <ChartExpenses expenses = {filteredExpenses}/>

       <ExpensesList item={filteredExpenses}/>
        </div>
     )
     
}

export default ExpenseData;