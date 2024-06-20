import React ,{useState} from 'react';

import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/Expenses/NewExpense';

const DUMMY_EXPENSE = [
  {
    id:'3e',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    id:'3r',
    title: 'Gaming acc',
    amount: 239.12,
    date: new Date(2021, 6, 14),
  },
  { id:'4r',
    title: 'New TV',
     amount: 799.49,
      date: new Date(2021, 2, 12) },
  {
    id:'5t',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 8, 28),
  }
];

const App = () => {
  
   const [expenses, setExpenses] = useState(DUMMY_EXPENSE);
  const setInputHandler=(expense)=>{
     setExpenses((prevExpenses) => {
      return [expense,...prevExpenses];
     });
  };
  return (
    <div>
      
      <NewExpense onSaveApp={setInputHandler}/>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;