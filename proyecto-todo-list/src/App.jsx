import React, { useState } from 'react';
import './App.css';
import Form from './componentes/form';
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>todo list</h1>
      <Form />
    </div>
  );
}

export default App
