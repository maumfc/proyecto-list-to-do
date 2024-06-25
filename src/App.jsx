import React, { useState } from 'react'; // Importa React y la función useState desde la biblioteca 'react'
import './App.css'; // Importa estilos CSS específicos para esta aplicación
import Form from './componentes/form/form'; // Importa el componente Form desde './componentes/form/form'

function App() {
  const [count, setCount] = useState(0); // Declara el estado local 'count' inicializado en 0 usando useState

  return (
    <div className="App"> {/* Renderiza un contenedor principal con clase CSS 'App' */}
      <h1>To-Do List</h1> {/* Renderiza un encabezado h1 con el texto 'To-Do List' */}
      <Form /> {/* Renderiza el componente Form importado */}
    </div>
  );
}

export default App; // Exporta el componente App como el componente predeterminado para este archivo
