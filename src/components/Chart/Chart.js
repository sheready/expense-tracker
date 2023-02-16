import React from 'react'
import '../Chart/Chart.css'
import ChartBar from './ChartBar'

const Chart = (props) => {
  // calculate max value of the month
  const dataPointsValues = props.dataPoints.map(dataPoint => dataPoint.value);
  //pull out all array elements from dataPointsValues as stand alone arguments
  const totalMaximum = Math.max(...dataPointsValues);

  return (
    <div className='chart'>
        {props.dataPoints.map(dataPoint => 
        // pass value to ChartBar that will be rendered
        // in this case its the date points value property
        // ensure it passes a maximum value of the value
        // pass in the label prop to reflect each month
        <ChartBar 
          key={dataPoint.label}
          value={dataPoint.value} 
          maxValue={totalMaximum}
          label={dataPoint.label} 
        />)}

    </div>
  )
}

export default Chart