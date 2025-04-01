//Dividimos el componente tasklist aún más

export const TaskCard = ({task}) => {
  return (
    //Ya no se coloca el id en este div, sino en el Tasklist
    <div>
        <h1>{task.title}</h1>
        <p>{task.description}</p>
    </div>
  )
}
