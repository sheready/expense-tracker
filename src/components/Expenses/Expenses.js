import React, { useState } from 'react'
import Card from './Card'
import '../UI/Expenses.css'
import Expensesfilter from './Expensesfilter'
import ExpensesList from './ExpensesList'

const Expenses = (props) => {
  const[filteredYear, setFilteredYear] = useState('2020');

  const getYearvalue = yeardata => {
    setFilteredYear(yeardata);
  }
  const filteredExpenses = props.data.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className='expenses'>
        <Expensesfilter selected={filteredYear} onSaveYear={getYearvalue} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  )
}

export default Expenses