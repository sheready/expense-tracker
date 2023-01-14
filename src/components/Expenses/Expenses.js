import React, { useState } from 'react'
import ExpenseItem from './ExpenseItem'
import Card from './Card'
import '../UI/Expenses.css'
import Expensesfilter from './Expensesfilter'

const Expenses = (props) => {
  const[filteredYear, setFilteredYear] = useState('2020');

  const getYearvalue = yeardata => {
    setFilteredYear(yeardata);
  }
  const filteredExpenses = props.data.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  let expensesContent = <h3>No expenses found for that year</h3>;

  if(filteredExpenses.length > 0){
    expensesContent = filteredExpenses.map((expense) => (
      <ExpenseItem 
        key = {expense.id}
        title = {expense.title} 
        amount = {expense.amount}
        date = {expense.date}
        />
      )
    )
  }

  return (
    <div>
      <Card className='expenses'>
        <Expensesfilter selected={filteredYear} onSaveYear={getYearvalue} />
        {expensesContent}
      </Card>
    </div>
  )
}

export default Expenses