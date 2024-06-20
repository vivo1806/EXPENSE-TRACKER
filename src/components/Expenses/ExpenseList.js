import React from 'react'
import ExpenseItem from './ExpenseItem';
import './ExpenseList.css'
function ExpenseList(prop) {
    let expenseContent = <h2 className='expenses-list__fallback'>No Expense found</h2>;
    if(prop.item.length===0){
        return expenseContent;
    }
  return (
    <ul className='expenses-list'>    
     {prop.item.map(expense => <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date}/>)
  }
    </ul>
  )
}

export default ExpenseList
