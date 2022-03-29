import React from 'react';
import './App.css';
import BarChart from './Components/BarChart';
import LineChart from './Components/LineChart';
function App() {
  return (
    <>
      <div style={{textAlign: 'center'}}>
        <h2>React charts</h2>
      </div>
      <div style={{display: 'flex', marginTop: 100, justifyContent: 'space-around'}}>
        <div>
          <BarChart />
        </div>
        <div> 
          <LineChart />
        </div>
      </div>
        
        
    </>
  );
}

export default App;
