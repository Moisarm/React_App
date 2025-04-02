import { createContext, useState, useEffect } from "react"; //libreria de react para crear contextos
import { tasks as data } from "../tasks"; //importo los datos como data

export const TaskContext = createContext(); //creamos un contexto

export const TaskContextProvider = ({ children }) => {
  //proveedor de contexto o Componente que engloba todo el contexto

  const [tasks, setTask] = useState([]);

  //creo una función para crear un nuevo elemento en el array task
  const createTask = (title, description) => {
    const newTask = {
      id: tasks.length,
      title,
      description,
    };

    //asigna las tareas anteriores y luego añade la nueva a un nuevo array
    setTask([...tasks, newTask]);
  };

  const deleteTask = (taskId) => {
    console.log(tasks);
    const deletedTask = tasks.filter((task) => task.id !== taskId); //filtro el array de tareas por el id
    setTask(deletedTask);
  };

  //useEffect es una función que se ejecuta una vez que se renderiza el contexto y le da los valores de data a tasks
  useEffect(() => {
    //asigno el valor de data a tasks
    setTask(data);
    console.log("Renderizado TaskContextProvider");
  }, []);

  return (
    <TaskContext.Provider value={{ tasks, createTask, deleteTask }}>
      {children}
    </TaskContext.Provider>
  );
};
