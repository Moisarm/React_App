//Dividimos el componente tasklist aún más
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext.jsx";

export const TaskCard = ({ task }) => {
  const { deleteTask } = useContext(TaskContext);

  return (
    //Ya no se coloca el id en este div, sino en el Tasklist
    <div className="bg-gray-800 text-white p-5 rounded-md">
      <h1 className="text-2xl font-bold capitalize">{task.title}</h1>
      <p className="text-sm text-gray-300">{task.description}</p>
      <button
        className="bg-red-700 hover:bg-red-500 text-white font-bold py-2 px-4 rounded-md mt-4"
        onClick={() => deleteTask(task.id)} /*Siempre que se use el onclick se
        debe utilizar una función anónima la cual ejecute la función deleteTask
        con el parametro que se le quiera pasar ()=>{deleteTask(task.id)} */
      >
        delete
      </button>
    </div>
  );
};
