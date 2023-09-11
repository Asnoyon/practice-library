import React from 'react'
import todo from "../images/todo.svg"
const TodoList = () => {
  return (
    <>
        <div className="main-div">
            <div className="child-div">
                <figure>
                    <img src={todo} alt="todo_logo" />
                </figure>
            </div>
        </div>
    </>
  )
}

export default TodoList