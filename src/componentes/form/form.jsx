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
    useEffect(() => {
        //cargarTareas()

    }, [])
    return (
        <div className='rawr'>
            <form onSubmit={handleSubmit}>
                <div className='contenedor-agregar'>
                    <input
                        type="text"
                        className='task-input'
                        value={inputValue}
                        placeholder='Ingresar la tarea..'
                        onChange={handleInputChange}
                    />
                    <button className='btn_add' type='submit'>Agregar</button>
                </div>
                
            </form>
            <div className='advo'>
                <div className='contenedor-completadas'>
                    <p>Tareas Completadas: {tareasCompletadas}</p>

                    </div>

                {tasks.length > 0 ?
                    <ul>
                        {tasks.map((task, index) => (
                            <Task key={index} index={index} nombre={task} deletes={handleDelete} completarTarea={completarTarea} incompletarTarea={incompletarTarea} />
                            // <li key={index}>{task}</li>
                        ))}
                    </ul>
                    :
                    <p>Sin Tareas</p> // Mostrar mensaje si no hay tareas
                }
            </div>
        </div>
    );
};


export default Form; // Exportar el componente Form como exportación por defecto


