import React, { useEffect, useState } from 'react'; // Importar React y useState desde la biblioteca 'react'
import Task from '../task'; // Importar el componente Task desde './task'
import './form.css'; // Importar estilos CSS desde './form.css'
import { UseForm } from './use-form';


const Form = () => {
   const {
    cargarTareas,
    handleSubmit,
    handleInputChange,
    handleDelete,
    completarTarea,
    incompletarTarea,
    inputValue,
    tasks,
    tareasCompletadas
} = UseForm()
useEffect(()=>{
    //cargarTareas()
    
},[])
    return (
        <div className='rawr'>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={inputValue}
                    placeholder='Ingresar la tarea..'
                    onChange={handleInputChange}
                />
                <button type='submit'>Agregar</button>
                <h1>{tareasCompletadas}</h1> 
            </form>
            <div className='advo'>
                {tasks.length > 0 ? 
                <ul>
                {tasks.map((task, index) => (
                   <Task key={index} index={index} nombre={task} deletes={handleDelete} completarTarea={completarTarea} incompletarTarea={incompletarTarea}/> 
                   // <li key={index}>{task}</li>
                ))}
            </ul>   
            :
            <p>sin tareas</p> // Mostrar mensaje si no hay tareas
            }
            </div>
        </div>
    );
};


export default Form; // Exportar el componente Form como exportación por defecto


