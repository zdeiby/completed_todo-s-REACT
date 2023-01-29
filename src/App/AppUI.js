import React from "react";
import { TodoCounter } from '../TodoCounter';
import { TodoContext } from '../TodoContext';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { CreateTodoItem } from '../CreateTodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import {Modal } from '../Modal'
import { TodoForm } from "../TodoForm";

function AppUI(){
const {
  searchedTodos,
  completeTodo,
  deleteTodo,
  openModal,
  setOpenModal,
 
}= React.useContext(TodoContext)
    return(
        <React.Fragment>
        <TodoCounter/>
        <TodoSearch/> 
      
        <TodoList>
         {searchedTodos.map(todo =>(
           <CreateTodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={()=> completeTodo(todo.text)}
            onDelete={() =>deleteTodo(todo.text) }
            />
         ))}
        </TodoList>
     
          {!!openModal && (
            <Modal>
              <TodoForm></TodoForm>
            </Modal>
          )}
      
        <CreateTodoButton
        setOpenModal={setOpenModal}/>
      
       </React.Fragment>
    );
}

export {AppUI}