import { useState } from "react"; // Importa useState desde la biblioteca 'react'
import { ConexionApi } from "../../hooks/conexion-api"; // Importa el módulo ConexionApi desde '../../hooks/conexion-api'

export const UseForm = () => {
    const {
        agregarTareaAPI, // Función para agregar una tarea a través de la API
        getTareas,       // Función para obtener todas las tareas desde la API
        deleteTarea      // Función para eliminar una tarea mediante su ID desde la API
    } = ConexionApi();   // Utiliza el módulo ConexionApi para obtener las funciones relacionadas con la API

    const [inputValue, setInputValue] = useState(''); // Estado para el valor del input
    const [tareasCompletadas, setTareasCompletadas] = useState(0); // Estado para contar las tareas completadas
    const [tasks, setTasks] = useState([]); // Estado para la lista de tareas

    const handleSubmit = (e) => {
        e.preventDefault(); // Evita que el formulario se envíe y recargue la página por defecto

        if (inputValue.trim() === '') {
            alert("Ingrese tarea"); // Alerta si el campo de input está vacío
            return;
        }

        // Agrega la tarea al estado 'tasks' y llama a la función para agregar tarea a la API
        setTasks([...tasks, inputValue]);
        setInputValue(''); // Limpia el valor del input después de agregar la tarea
        agregarTareaAPI({ nombre: inputValue }); // Llama a la función para agregar tarea a través de la API
    };

    const handleInputChange = (e) => {
        setInputValue(e.target.value); // Actualiza el estado 'inputValue' con el valor del input
    };

    const handleDelete = (index) => {
        setTasks(tasks.filter((_, i) => i !== index)); // Elimina la tarea del estado 'tasks'
        
        // Decrementa el contador de tareas completadas si es mayor que cero
        if (tareasCompletadas > 0) {
            setTareasCompletadas(tareasCompletadas - 1);
        }

        deleteTarea(index); // Llama a la función para eliminar tarea a través de la API
    };

    const completarTarea = () => {
        setTareasCompletadas(tareasCompletadas + 1); // Incrementa el contador de tareas completadas
    };

    const incompletarTarea = () => {
        setTareasCompletadas(tareasCompletadas - 1); // Decrementa el contador de tareas completadas
    };

    const cargarTareas = () => {
        const result = getTareas(); // Obtiene las tareas desde la API
        setTasks(result); // Actualiza el estado 'tasks' con las tareas obtenidas
        alert("hola"); // Muestra una alerta de prueba (probablemente para depuración)
    };

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
    };
};
