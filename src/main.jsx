import React from 'react'; // Importa React desde la biblioteca 'react'
import ReactDOM from 'react-dom/client'; // Importa ReactDOM desde 'react-dom/client'
import App from './App.jsx'; // Importa el componente principal de la aplicación desde './App.jsx'
import './index.css'; // Importa estilos CSS desde './index.css'

// Utiliza ReactDOM.createRoot para inicializar el renderizado de la aplicación en el elemento con id 'root'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode> {/* Modo estricto de React para mejores prácticas */}
    <App /> {/* Renderiza el componente principal de la aplicación */}
  </React.StrictMode>, // Fin del modo estricto
);
