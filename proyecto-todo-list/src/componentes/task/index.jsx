import React from 'react'
import './index.css'


const Task = ({deletes, index, nombre, completarTarea, incompletarTarea}) => { 
    
  return (
    <div className='task'>
      <input type='checkbox' onClick={(e)=>{e.target.checked ? completarTarea(index):incompletarTarea(index)}}/> 
      <p>{nombre}</p>
        <button onClick={()=> deletes(index)}>x</button>
    </div>
  )
}

export default Task
