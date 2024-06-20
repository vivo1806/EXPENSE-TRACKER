
 import React from 'react'
 import './ChartBar.css'
 
 function CharBar(prop) {
    let barHeight ='0%';

    if(prop.maxValue>0){
      barHeight = ((prop.value/prop.maxValue)*100) + '%';
    }
   return (
    <div className='chart-bar'>
        <div className='chart-bar_inner'>
            <div className='chart-bar_fill' style={{height: barHeight}}></div>
        </div>
        <div className='chart-bar_label'>{prop.label}</div>
     </div>
   );
 };
 
 export default CharBar
 