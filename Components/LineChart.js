import React from 'react'
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS} from 'chart.js/auto';
function BarChart() {
  return (
    <div style={{width: 600, height: 300}}>
      <Line
        height={300}
        width={700}
        data={{
            labels: ["Red", "Green", "Blue", "Purple"],
            datasets: [{
                data:[10, 20, 25, 40],
                backgroundColor: ["Red", "Green", "Blue", "Purple" ],
                label: "Colors"
            }],
            
        }}
        options={{
            maintainAspectRatio: false,
            scales: {
                yAxes: {
                    ticks:{
                        beginAtZero: true
                    }
                    
                }
            },
            
        }}
      />

    </div>
  )
}

export default BarChart
