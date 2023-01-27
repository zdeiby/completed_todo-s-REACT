//import logo from './logo.svg';
//import './App.css';
import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { CreateTodoItem } from './CreateTodoItem';
import { CreateTodoButton } from './CreateTodoButton';

const defaulTodos=[
  {text: 'Estudiar node js', completed:false},
  {text: 'estudiar Javascript', completed: false},
  {text: 'dormir', completed: false},
  {text: 'comer', completed: false}
]

function App() {
  const [todos, setTodos]= React.useState(defaulTodos);
  const [searchValue, setSearchValue]= React.useState('');

  const completedTodos= todos.filter(todo => todo.completed==true).length;
  const totalTodos=todos.length;

  let searchedTodos = [];

  if(!searchValue.length >= 1){
    searchedTodos = todos;
  }else {
    searchedTodos = todos.filter(todo => {
        const todoText = todo.text.toLowerCase()
        const searchText = searchValue.toLowerCase();
       return todoText.includes(searchText);
    })
  
  }

  const completeTodo = (text) =>{
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed= true;
    setTodos(newTodos)

  }

  const deleteTodo = (text) =>{
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex,1)
    setTodos(newTodos)

  }

  return (
  <React.Fragment>
   <TodoCounter
   total={totalTodos}
   completed={completedTodos}
   />
   <TodoSearch 
    searchValue={searchValue}
    setSearchValue={setSearchValue}
   />
   <TodoList>
    {searchedTodos.map(todo =>(
      <CreateTodoItem
       key={todo.text} 
       text={todo.text}
       completed={todo.completed}
       onComplete={()=> completeTodo(todo.text)}
       onDelete={() =>deleteTodo(todo.text) }/>
    ))}
   </TodoList>
   <CreateTodoButton/>
 
  </React.Fragment>
  );
}

export default App;
