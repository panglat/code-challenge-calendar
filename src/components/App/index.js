// @ packages
import React from 'react';
import CalendarTable from '../app-components/CalendarTable';

// @ own
import './styles.scss';

function App() {
  return (
    <div className="App">
      <CalendarTable monthNumber={4} year={2020} />
    </div>
  );
}

export default App;
