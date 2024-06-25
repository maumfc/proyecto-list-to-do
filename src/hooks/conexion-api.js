export const ConexionApi = () => {
    // Función asincrónica para agregar una tarea a través de la API
    async function agregarTareaAPI(tarea) {
        try {
            // Realiza una solicitud POST a la URL del servidor local para agregar la tarea
            const response = await fetch("http://localhost:3000/api/task", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json" // Establece el tipo de contenido del cuerpo como JSON
                },
                body: JSON.stringify(tarea) // Convierte el objeto tarea a JSON y lo envía en el cuerpo de la solicitud
            });
            // Verifica si la respuesta fue exitosa (status en el rango 200-299)
            if (!response.ok) {
                throw new Error("Error al agregar la tarea"); // Lanza un error si la respuesta no es exitosa
            }
            // Lee y parsea la respuesta JSON para obtener la nueva tarea agregada
            const nuevaTarea = await response.json();
            return nuevaTarea; // Retorna la nueva tarea agregada
        } catch (error) {
            console.log(error); // Captura cualquier error y lo registra en la consola
        }
    }

    // Función asincrónica para obtener todas las tareas desde la API
    async function getTareas() {
        try {
            // Realiza una solicitud GET a la URL del servidor local para obtener las tareas
            const response = await fetch("http://localhost:3000/api/task");
            // Parsea la respuesta JSON para obtener los datos (actualmente devuelve un array de tareas de ejemplo)
            let datos = await response.json();
            return ["tarea1", "tarea2"]; // Retorna un array de ejemplo de tareas (debe ser reemplazado con datos reales)
            // datos.forEach(tarea => {
            //     let p = document.createElement("p");
            //     p.textContent = tarea.name;
            //     document.body.appendChild(p);
            // });
        } catch (error) {
            console.log(error); // Captura cualquier error y lo registra en la consola
        }
    }

    // Función asincrónica para eliminar una tarea mediante su ID desde la API
    async function deleteTarea(id) {
        try {
            // Realiza una solicitud DELETE a la URL del servidor local para eliminar la tarea especificada por su ID
            const respuesta = await fetch(`http://localhost:3000/api/task/${id}`, {
                method: "DELETE" // Especifica que el método HTTP es DELETE
            });

            // Parsea la respuesta JSON para obtener los datos de la tarea eliminada
            const dataBorrada = await respuesta.json();
            console.log(dataBorrada); // Registra los datos de la tarea eliminada en la consola

            // Actualiza la lista de tareas después de eliminar una tarea (actualización no implementada correctamente)
            getTareas(); // Llama a la función getTareas para actualizar la lista de tareas
        } catch (error) {
            console.error(error); // Captura cualquier error y lo registra en la consola
        }
    }
    
    // Retorna las funciones públicas disponibles desde este módulo
    return {
        agregarTareaAPI,
        getTareas,
        deleteTarea
    }
}
