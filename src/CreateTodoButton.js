import React from "react";
import './CreateTodoButton.css';


function CreateTodoButton(){
    const onClickButton = (msg)=>{
        console.log(msg)
    }
    return(
        <button className="CreateTodoButton"
            onClick={() => onClickButton("aqui se imprime")}
     
        >+</button>
    )
}

export {CreateTodoButton};