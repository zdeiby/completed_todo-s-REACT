import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoForm.css'

function TodoForm(){
    const [newTodoValue, setNewTodoValue]= React.useState('')
    const {
        addTodo,
        setOpenModal,
    } = React.useContext(TodoContext)

   
    function onChange(event){
       setNewTodoValue(event.target.value);  
        }
    function onCancel(){
        setOpenModal(false)
        }
    function onSubmit(event){
        event.preventDefault();
        addTodo(newTodoValue)
        setOpenModal(false)
    }
    return(
        <form onSubmit={onSubmit}>
            <label>
             Escribe tu nuevo TODO
            </label> 
            <textarea 
            value={newTodoValue}
            onChange={onChange}
            placeholder="Ingresa un TODO"></textarea>
            <div className="TodoForm-buttonContainer"> 
               <button 
               onClick={onCancel}
               className="TodoForm-button TodoForm-button--cancel"
               type="button"
               >Cancelar</button>

               <button 
               onClick={onSubmit}
               className="TodoForm-button TodoForm-button-add"
                type="submit"
               >Añadir</button>
              
            </div>
        </form>
    )
}

export {TodoForm}