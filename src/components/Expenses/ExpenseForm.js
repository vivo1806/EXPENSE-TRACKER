import React, {useState} from 'react'
import './ExpenseForm.css'
function ExpenseForm(prop) {
     const [setTitle, setEnteredTitle] = useState('');
     const [setAmount, setEnteredAmount] = useState('');
     const [setDate, setEnteredDate] = useState('');

    // const [userInput, setUserInput ] = useState({
    //     setTitle: '',
    //     setAmount: '',
    //     setDate:''
    // });

    const changeTitleHandler=(event)=>{
        setEnteredTitle(event.target.value);
        // setUserInput((prevState)=>{
        //     return {...prevState, setTitle: event.target.value};
        // })
    }
    const changeAmountHandler=(event)=>{
        setEnteredAmount(event.target.value);
        // setUserInput((prevState)=>{
        //     return {...prevState, setAmount: event.target.value}
        // })
    }
    const changeDateHandler=(event)=>{
        setEnteredDate(event.target.value);
        // setUserInput((prevState)=>{
        //     return {...prevState, setDate: event.target.value}
        // })
    }
    const submitHandler=(event) => {
        event.preventDefault();
        const expense = {
            id: Math.random(),
            title: setTitle,
            amount: setAmount,
            date: new Date(setDate)
        }
        prop.onSaveExpense(expense);
        setEnteredAmount('');
        setEnteredDate('');
        setEnteredTitle('');
    }
  return (
    <form onSubmit={submitHandler}>
      <div className='new-expense__control'>
        <div className='new-expense__control'>
        <label>Title</label>
        <input type='text' value={setTitle} onChange={changeTitleHandler}></input>
        </div>
        <div className='new-expense__control'>
            <label>Amount</label>
            <input type = 'number' value={setAmount} onChange={changeAmountHandler}></input>
        </div>
        <div className='new-expense__control'>
            <label>Date</label>
            <input type='date' value={setDate} onChange={changeDateHandler}></input>
        </div>
        
      </div>
      <div className='new-expense__actions'>
      <button type="button" onClick={prop.onCancel}>Cancel</button>
      <button type='submit' >Add Expense</button>
        </div>
    </form>
  )
}

export default ExpenseForm
