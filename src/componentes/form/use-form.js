import { useState } from "react";
import { ConexionApi } from "../../hooks/conexion-api";

export const UseForm=()=>{
    const {
        agregarTareaAPI,
        getTareas,
        deleteTarea
    } = ConexionApi()
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
            //agregarTareaAPI({nombre:inputValue})
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
        deleteTarea(index)

    };
    const completarTarea = () => {
        //()=>{}setTasks(tasks.filter((_, i) => i !== index));
        setTareasCompletadas(tareasCompletadas+1)
    }
    const incompletarTarea = () => {
        //()=>{}setTasks(tasks.filter((_, i) => i !== index));
        setTareasCompletadas(tareasCompletadas-1)
   }
   const cargarTareas = () =>{
    const result=getTareas()
    setTasks(result);
    alert("hola")
    
   }
    return {
        cargarTareas,
        handleSubmit,
        handleInputChange,
        handleDelete,
        completarTarea,
        incompletarTarea,
        inputValue,
        tasks,
        tareasCompletadas,

    }
}