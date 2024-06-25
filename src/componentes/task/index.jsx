import React from 'react'; // Importa la biblioteca React para definir componentes de React
import './index.css'; // Importa el archivo CSS para estilos

// Componente Task definido como un componente funcional, que recibe props como entrada
const Task = ({ deletes, index, nombre, completarTarea, incompletarTarea }) => {

  return (
    <div className='task'> {/* Div contenedor principal con clase CSS 'task' */}
      <div className='task-nombre'> {/* Div para mostrar el nombre de la tarea con clase CSS 'task-nombre' */}
        <input 
          type='checkbox' 
          onClick={(e) => { e.target.checked ? completarTarea() : incompletarTarea() }} 
        /> {/* Input de tipo checkbox para marcar la tarea como completada o incompleta */}
        <p className='parrafo'>{nombre}</p> {/* Párrafo que muestra el nombre de la tarea con clase CSS 'parrafo' */}
      </div>
      <button className='litt-malo' onClick={() => deletes(index)}>x</button> {/* Botón para eliminar la tarea con clase CSS 'litt-malo' */}
    </div>
  );
};

export default Task; // Exporta el componente Task como la exportación predeterminada de este archivo
