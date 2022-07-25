import React from 'react';
import './App.css';
import Todos from './components/Todos';

function App() {
  return (
    <div>
      <Todos items={['Learn JS', 'Learn TS']} />
    </div>
  );
}

export default App;
