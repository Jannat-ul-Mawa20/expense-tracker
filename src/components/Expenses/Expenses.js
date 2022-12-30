import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
// import Card from './Card';
import React from "react";

const Expenses = (props) => {
  return (
    <div className="expenses">
      {props.item.map((expense) => (
        <ExpenseItem
          key={expense.id}
          date={expense.date}
          title={expense.title}
          amount={expense.amount}
        />
      ))}
    </div>
  );
};

export default Expenses;
