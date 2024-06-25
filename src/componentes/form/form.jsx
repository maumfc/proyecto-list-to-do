import React, { useEffect, useState } from 'react'; // Importar React y useState desde la biblioteca 'react'
import Task from '../task'; // Importar el componente Task desde '../task'
import './form.css'; // Importar estilos CSS desde './form.css'
import { UseForm } from './use-form'; // Importar el hook personalizado UseForm desde './use-form'

const Form = () => {
    // Desestructuración de funciones y variables del hook UseForm
    const {
        cargarTareas,         // Función para cargar las tareas
        handleSubmit,        // Función para manejar el envío del formulario
        handleInputChange,   // Función para manejar cambios en el input
        handleDelete,        // Función para manejar la eliminación de una tarea
        completarTarea,      // Función para marcar una tarea como completada
        incompletarTarea,    // Función para marcar una tarea como incompleta
        inputValue,          // Estado para almacenar el valor del input
        tasks,               // Array que contiene las tareas
        tareasCompletadas    // Número que indica la cantidad de tareas completadas
    } = UseForm();           // Uso del hook personalizado UseForm para gestionar el formulario

    useEffect(() => {
        // useEffect para cargar las tareas cuando el componente se monta (actualmente comentado)
        // cargarTareas();
    }, []);

    return (
        <div className='rawr'> {/* Contenedor principal con clase CSS 'rawr' */}
            <form onSubmit={handleSubmit}> {/* Formulario con función handleSubmit al enviar */}
                <div className='contenedor-agregar'> {/* Div contenedor para agregar tarea */}
                    <input
                        type="text"
                        className='task-input' // Clase CSS para el input de la tarea
                        value={inputValue} // Valor del input vinculado al estado inputValue
                        placeholder='Ingresar la tarea..' // Placeholder del input
                        onChange={handleInputChange} // Función para manejar cambios en el input
                    />
                    <button className='btn_add' type='submit'>Agregar</button> {/* Botón para agregar tarea */}
                </div>
            </form>

            <div className='advo'> {/* Div contenedor adicional con clase CSS 'advo' */}
                <div className='contenedor-completadas'> {/* Div contenedor para tareas completadas */}
                    <p>Tareas Completadas: {tareasCompletadas}</p> {/* Texto que muestra la cantidad de tareas completadas */}
                </div>

                {/* Condición para renderizar la lista de tareas o un mensaje si no hay tareas */}
                {tasks.length > 0 ?
                    <ul>
                        {/* Mapeo del array 'tasks' para renderizar cada tarea como un componente Task */}
                        {tasks.map((task, index) => (
                            <Task
                                key={index} // Clave única para cada tarea
                                index={index} // Índice de la tarea en el array
                                nombre={task} // Nombre de la tarea
                                deletes={handleDelete} // Función para eliminar la tarea
                                completarTarea={completarTarea} // Función para marcar la tarea como completada
                                incompletarTarea={incompletarTarea} // Función para marcar la tarea como incompleta
                            />
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
