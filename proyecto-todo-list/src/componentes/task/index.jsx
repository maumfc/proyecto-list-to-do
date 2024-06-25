import React from 'react' // Importar la biblioteca React para definir componentes de React
import './index.css' // Importar el archivo CSS para estilos


// Componente Task definido como un componente funcional, que recibe props como entrada
const Task = ({deletes, index, nombre, completarTarea, incompletarTarea}) => { 
    
  return (
    <div className='task'>  
      <input type='checkbox' onClick={(e)=>{e.target.checked ? completarTarea():incompletarTarea()}}/>  
      <p>{nombre}</p>
        <button onClick={()=> deletes(index)}>x</button>
    </div>
  )
}

export default Task
