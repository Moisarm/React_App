import { TaskCard } from "./TaskCard"
// uso rfce para crear componentes sin escribir mucho codigo

//pido las tareas como un prop
const TaskList=({tasks})=> {

if(tasks.length === 0){
    return <h1>No hay tareas</h1>
}

//muestro el contenido de tasks
console.log("TaskList")
    console.log(tasks)
  return (
    <>
    <h1>Lista de tareas</h1>
    {/* mapear cada elemento de tasks */}
    {tasks.map((task)=>(
        <TaskCard key={task.id} task={task}/>
    ))}
    </>
  )
}

export default TaskList