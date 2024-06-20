import React, {useState} from 'react';


import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';
import ExpenseFilter from './ExpenseFilter';
import ExpenseList from './ExpenseList';
import Chart from '../Charts/Chart';
import ExpenseChart from './ExpenseChart';

const Expenses = (props) => {
   const [filterYear, setFilteredYear]= useState('2020')
  const filterChangeHandler=(selectedYear)=>{
      setFilteredYear(selectedYear);
  }
  const filterExpense=props.items.filter(expense => {
    return expense.date.getFullYear().toString()=== filterYear;
  }) 

  
  return (
    <Card className="expenses">
      
      <ExpenseFilter selected={filterYear} onChangeFilter={filterChangeHandler}  />
      <ExpenseChart expenses={filterExpense}/>
      
      <ExpenseList item={filterExpense} />
    </Card>
  );
}

export default Expenses;