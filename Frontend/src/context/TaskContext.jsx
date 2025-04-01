import { createContext } from "react";//libreria de react para crear contextos

export const TaskContext = createContext();//creamos un contexto

export const TaskContextProvider = ({children}) => {//proveedor de contexto
  return (
    <>
    <TaskContextProvider>
        {children}
    </TaskContextProvider>
    </>
  )
}

