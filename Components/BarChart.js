import React from 'react'
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS} from 'chart.js/auto';

function BarChart() {
  return (
    <div style={{width: 600, height: 300}}>
      <Bar
        height={200}
        width={500}
        
        data={{
            labels: ["Red", "Green", "Blue", "Purple"],
            datasets: [{
                data:[10, 20, 30, 40],
                barThickness: 20,
                backgroundColor: ["Red", "Green", "Blue", "Purple" ],
                label: "Colors"
            }],
            
        }}
        options={{
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true
                }
            },
            plugins: {
                legend: {
                    display: true,
                    labels: {
                        color: 'rgb(255, 99, 132)'
                    }
                }
            }
        }}
      />

    </div>
  )
}

export default BarChart
