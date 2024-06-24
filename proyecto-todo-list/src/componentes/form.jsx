import React, { useState } from 'react';
import Task from './task';
import './form.css';


const Form = () => {
    const [inputValue, setInputValue] = useState(''); // Estado para el valor del input
    const [tareasCompletadas, setTareasCompletadas] = useState(0);
    const [tasks, setTasks] = useState([]); // Estado para la lista de tareas
    const handleSubmit = (e) => {
        e.preventDefault(); 

if (inputValue.trim() === '') {
    alert("Ingrese tarea")
}

        if (inputValue.trim() !== '') {

            setTasks([...tasks, inputValue]);
            setInputValue(''); 
        }
    };
    const handleInputChange = (e) => {
        setInputValue(e.target.value); // Actualiza el valor del input
    };
    const handleDelete = (index) => {
        setTasks(tasks.filter((_, i) => i !== index));
        if(tareasCompletadas>0){
            setTareasCompletadas(tareasCompletadas-1)
        }
       

    };
    const completarTarea = (index) => {
        //()=>{}setTasks(tasks.filter((_, i) => i !== index));
        setTareasCompletadas(tareasCompletadas+1)
    }
    const incompletarTarea = (index) => {
        //()=>{}setTasks(tasks.filter((_, i) => i !== index));
        setTareasCompletadas(tareasCompletadas-1)
    }
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
            <p>sin tareas</p>
            }
            </div>
        </div>
    );
};


export default Form;

