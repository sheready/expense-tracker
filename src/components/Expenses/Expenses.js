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

  return (
    <div>
      <Card className='expenses'>
        <Expensesfilter selected={filteredYear} onSaveYear={getYearvalue} />
        {/* trasform oue array of objects into an array of JSX elements */}
        {props.data.map((expense) => (
        <ExpenseItem 
          key = {expense.id}
          title = {expense.title} 
          amount = {expense.amount}
          date = {expense.date}
          />
        ))}
      </Card>
    </div>
  )
}

export default Expenses