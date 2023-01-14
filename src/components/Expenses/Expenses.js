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
        <ExpenseItem title={props.data[0].title} 
                  amount={props.data[0].amount} 
                  date={props.data[0].date}
        />
        <ExpenseItem  title={props.data[1].title} 
                  amount={props.data[1].amount} 
                  date={props.data[1].date}
        />
      </Card>
    </div>
  )
}

export default Expenses