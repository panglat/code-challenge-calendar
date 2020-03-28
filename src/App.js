import React from 'react';
import './App.scss';
import CalendarTable from './components/CalendarTable';

function App() {
  return (
    <div className="App">
      <CalendarTable monthNumber={4} year={2020} />
    </div>
  );
}

export default App;
