import React, {useState} from 'react'
import ExpenseForm from './ExpenseForm'
import './NewExpense.css'

function NewExpense(prop) {
  const [isEditing,setEditingStatus] = useState(false);
  const onSaveHandler = (expense)=> {
    const newExpense ={
      ...expense
    }
    prop.onSaveApp(newExpense);
    setEditingStatus(false);
  }
   
   const startExpenseEditing=()=>{
    setEditingStatus(true);
   }
   const stopExpenseEditing=()=>{
    setEditingStatus(false);
   }
  return (
    <div className='new-expense'>
      {!isEditing &&
        <button onClick={startExpenseEditing}>add Expenses</button>}
        {isEditing && <ExpenseForm onCancel={stopExpenseEditing} onSaveExpense={onSaveHandler} />}
      
    </div>
  )
}

export default NewExpense
