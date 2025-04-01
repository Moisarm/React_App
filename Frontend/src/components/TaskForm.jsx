import { useState } from "react";

export const TaskForm = ({createTask}) => {

    //declaración de variables de estado
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    //declaro por serparado las funciones de los manejadores de eventos
    const handleChange = (event)=>{
        event.preventDefault()
        setTitle(event.target.value)
    }
    
    const handleDescription = (event)=>{
        event.preventDefault()
        setDescription(event.target.value)
    }
        
    const handleSubimt =(event)=>{
        event.preventDefault()
        createTask(title, description)
        setTitle('')
        setDescription('')
    }
        return (
            //El objeto padre es el formulario
            <form onSubmit={handleSubimt}>
                
                <input placeholder='Add a task' 
                onChange={handleChange} value={title}/*el value es igual al hook state*//>
                
                <textarea placeholder="Add a description" 
                onChange={handleDescription} value={description}/*El value es igual al hook state*//>
               
                <button>
                    save
                </button>
            </form>
            
        )
}
