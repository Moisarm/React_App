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
    <form onSubmit={handleSubimt}>
      <input
        name="title"
        placeholder="Add a task"
        onChange={handleChange}
        value={title}
        /*el value es igual al hook state*/ autoFocus
      />

      <textarea
        name="description"
        placeholder="Add a description"
        onChange={handleDescription}
        value={description} /*El value es igual al hook state*/
      />

      <button>save</button>
    </form>
  );
};
