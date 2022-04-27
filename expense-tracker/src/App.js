import { useState } from 'react';
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import {v4 as Guid } from 'uuid';

const seedExpenses = [
  { id: Guid(), title: 'Toilet Paper', amount: 94.12, date: new Date(2020, 7, 14) }
 ,{ id: Guid(), title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) }
 ,{ id: Guid(), title: 'Car Insurance', amount: 294.67, date: new Date(2021, 2, 28) }
 ,{ id: Guid(), title: 'New Desk (Wooden)', amount: 450, date: new Date(2021, 5, 12) }
];

const App = () => {
  const [expenses, setExpenses] = useState(seedExpenses);

  const addExpenseHandler = (expense) => {
    setExpenses((previousExpenses) => [expense, ...previousExpenses]);
  };

  return (
    <main>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses} />
    </main>
  );

  // How it's done without syntatic sugar. Requires React import.
  //import React from 'react';
  // return React.createElement(
  //   'div'
  //   ,{}
  //   ,React.createElement('h2', {}, "Let's get started!")
  //   ,React.createElement(Expenses, {items: expenses})
  //   );
}

export default App;
