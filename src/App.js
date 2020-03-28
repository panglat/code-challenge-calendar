import React from 'react';
import './App.scss';
import CalendarTable from './components/CalendarGrid';

function App() {
  return (
    <div className="App">
      <CalendarTable monthNumber="4" year="2020" />
    </div>
  );
}

export default App;
