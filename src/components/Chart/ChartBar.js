import React from 'react'
import '../Chart/ChartBar.css'

const ChartBar = (props) => {
  let barFillHeight = '0%';
  // to  get the % of how much the bar should be filled using css height property
  if(props.maxValue > 0){
    barFillHeight = Math.round((props.value / props.maxValue) * 100) + '%' // to convert it to a string
  }
  return (
    <div className='chart-bar'>
      <div className='chart-bar__inner'>
        {/* make the height style dynamic */}
        {/* we add a 2nd curly bracket because we are passing a dynamic js object */}
        <div className='chart-bar__fill' style={{height: barFillHeight}}></div>
      </div>
      <div className='chart-bar__label'>{props.label}</div>
    </div>
  )
}

export default ChartBar