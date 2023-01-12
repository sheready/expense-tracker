import React from 'react'
import ExpenseItem from './ExpenseItem'
import './Expenses.css'

const Expenses = (props) => {
  return (
    <div className='expenses'>
        <ExpenseItem title={props.data[0].title} 
                  amount={props.data[0].amount} 
                  date={props.data[0].date}
        />
        <ExpenseItem  title={props.data[1].title} 
                  amount={props.data[1].amount} 
                  date={props.data[1].date}
        />
    </div>
  )
}

export default Expenses