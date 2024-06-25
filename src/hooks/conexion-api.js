export const ConexionApi = () => {
    async function agregarTareaAPI(tarea) {
        try {
            const response = await fetch("http://localhost:3000/api/task", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(tarea)
            });
            if (!response.ok) {
                throw new Error("Error al agregar la tarea");
            }
            const nuevaTarea = await response.json();
            return nuevaTarea;
        } catch (error) {
            console.log(error);
        }
    }
    async function getTareas() {
        try {
            const response = await fetch("http://localhost:3000/api/task");
            let datos = await response.json();
            return ["tarea1", "tarea2"];
            // datos.forEach(tarea => {
            //     let p = document.createElement("p");
            //     p.textContent = tarea.name;
            //     document.body.appendChild(p);
            // });
        } catch (error) {
            console.log(error);
        }
    }
    async function deleteTarea(id) {
        try {
            const respuesta = await fetch(`http://localhost:3000/api/task/${id}`, {
                method: "DELETE"
            });
    
            const dataBorrada = await respuesta.json();
            console.log(dataBorrada);
    
            // Actualizar la lista de tareas después de eliminar una
            getTareas();
        } catch (error) {
            console.error(error);
        }
    }
    
    return{
        agregarTareaAPI,
        getTareas,
        deleteTarea
    }
}