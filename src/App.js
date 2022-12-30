import Expenses from "./components/Expenses/Expenses";
import React, {useState} from "react";

import NewExpense from "./components/NewExpense/NewExpense";

let DUMMY_EXPENSE = [
  {
    id: "e1",
    title: "School fee",
    amount: 250,
    date: new Date(2022, 5, 12),
  },
  {
    id: "e2",
    title: "Books",
    amount: 220,
    date: new Date(2022, 4, 20),
  },
  {
    id: "e3",
    title: "House Rent",
    amount: 300,
    date: new Date(2022, 3, 17),
  },
  {
    id: "e4",
    title: "Food",
    amount: 700,
    date: new Date(2022, 6, 14),
  },
];

function App() {

  const [expenses, setExpenses] = useState(DUMMY_EXPENSE);
  

  const addExpenseHandler = (expense) => {
    const upDatedExpense = [expense, ...expenses];
    setExpenses(upDatedExpense);
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses item={expenses} />
    </div>
  );
}

export default App;
