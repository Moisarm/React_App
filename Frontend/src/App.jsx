//Puedes ahorrar tiempo escribiendo el import con el comando imp
import TaskList from "./components/TaskList";
import { TaskForm } from "./components/TaskForm";

function App() {
  /*------Antes pasaba los datos a los componentes, ahora usas el contexto directamente en el componente que lo necesite------*/
  return (
    <>
      <TaskList />
      <TaskForm />
    </>
  );
}

export default App;
