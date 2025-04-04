import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

export const TaskForm = () => {
  //declaración de variables de estado
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { createTask } = useContext(TaskContext);

  //declaro por serparado las funciones de los manejadores de eventos
  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDescription = (event) => {
    setDescription(event.target.value);
  };

  const handleSubimt = (event) => {
    event.preventDefault();
    createTask(title, description);
    setTitle("");
    setDescription("");
  };

  return (
    //El objeto padre es el formulario
    <div className="mx-auto max-w-md">
      <form
        onSubmit={handleSubimt}
        className="bg-slate-800 rounded-md p-10 mt-5">
        <h1 className="text-2xl font-bold text-white mb-3">Add a task</h1>

        <input
          name="title"
          placeholder="Add a task"
          onChange={handleChange}
          value={title}
          /*el value es igual al hook state*/ autoFocus
          className="bg-slate-300 p-3 rounded-md w-full text-bg-gray-900 text-md"
        />

        <textarea
          name="description"
          placeholder="Add a description"
          onChange={handleDescription}
          value={description} /*El value es igual al hook state*/
          className="bg-slate-300 p-3 rounded-md w-full text-bg-gray-900 text-md mt-2"
        />

        <button className="text-white p-5 rounded-md w-full mt-2 bg-green-800 hover:bg-green-500 ">
          save
        </button>
      </form>
    </div>
  );
};
