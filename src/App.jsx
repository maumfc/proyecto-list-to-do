import React, { useState } from 'react';
import './App.css';
import Form from './componentes/form/form';
function App() {
  const [count, setCount] = useState(0); 

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <Form />
    </div>
  );
}

export default App
