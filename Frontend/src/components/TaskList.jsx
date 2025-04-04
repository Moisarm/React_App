import { TaskCard } from "./TaskCard";

import { useContext } from "react";
import { TaskContext } from "../context/TaskContext.jsx";
// uso rfce para crear componentes sin escribir mucho codigo

//pido las tareas como un prop
const TaskList = () => {
  const { tasks } = useContext(TaskContext);

  if (tasks.length === 0) {
    return <h1 className="text-white text-4xl">No hay tareas</h1>;
  }

  //muestro el contenido de tasks
  console.log("TaskList");
  console.log(tasks);
  return (
    <div className="grid grid-cols-4 gap-2">
      {/* mapear cada elemento de tasks */}
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;
