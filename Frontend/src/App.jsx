//Puedes ahorrar tiempo escribiendo el import con el comando imp
import TaskList from "./components/TaskList";
import { TaskForm } from "./components/TaskForm";

function App() {
  /*------Antes pasaba los datos a los componentes, ahora usas el contexto directamente en el componente que lo necesite------*/
  return (
    <main className="bg-zinc-900 h-screen">
      <div className="container mx-auto flex flex-col items-center justify-center p-10">
        <TaskList />
        <TaskForm />
      </div>
    </main>
  );
}

export default App;
