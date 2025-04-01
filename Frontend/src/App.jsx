//Puedes ahorrar tiempo escribiendo el import con el comando imp
import { useState, useEffect } from "react";
import TaskList from "./components/TaskList";
import {TaskForm} from "./components/TaskForm";
import {tasks as data} from "./tasks"; //importo los datos como data

function App() {
    const [tasks, setTask] = useState([])
//asigno el valor de data a tasks
useEffect(()=>{
    setTask(data)
},[])

//creo una función para crear un nuevo elemento en el array task
const createTask =(title, description)=>{
    const newTask = {
        id:tasks.length,
        title,
        description
    }

    //asigna las tareas anteriores y luego añade la nueva a un nuevo array
    setTask([...tasks, newTask])

}
  return (
    <>
      <TaskList tasks={tasks}/>
      <TaskForm createTask={createTask}/>
    </>
  )
}

export default App
