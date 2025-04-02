//Dividimos el componente tasklist aún más
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext.jsx";

export const TaskCard = ({ task }) => {
  const { deleteTask } = useContext(TaskContext);

  return (
    //Ya no se coloca el id en este div, sino en el Tasklist
    <div>
      <h1>{task.title}</h1>
      <p>{task.description}</p>
      <button
        onClick={() =>
          deleteTask(task.id)
        } /*Siempre que se use el onclick se debe utilizar una función anónima la cual ejecute la función deleteTask con el parametro que se le quiera pasar ()=>{deleteTask(task.id)} */
      >
        delete
      </button>
    </div>
  );
};
