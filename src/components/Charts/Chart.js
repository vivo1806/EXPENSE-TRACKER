import CharBar from "./CharBar";

import React from 'react'
import './Charts.css'

function Chart(prop) {
  const dataPointvalue = prop.dataPoints.map(dataPoint => dataPoint.value);

  const totalMaximum = Math.max(...dataPointvalue);
  return (
    <div className="chart">
      {prop.dataPoints && prop.dataPoints.map((dataPoint) => (<CharBar key={dataPoint.label} maxValue={totalMaximum} value={dataPoint.value} label={dataPoint.label} />))}
    </div>
  )
}

export default Chart
