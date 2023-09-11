import React from 'react'
import todo from "../images/todo.svg"
const TodoList = () => {
  return (
    <>
        <div className="main-div">
            <div className="child-div">
                <figure>
                    <img src={todo} alt="todo_logo" />
                    <figcaption>Add Your List Here</figcaption>
                </figure>

                <div className="addItems">
                    <input type="text" placeholder="✍ Add your items" id="" />
                    <i class="fa fa-plus add-btn" title='Add Item'></i>
                </div>
            </div>
        </div>
    </>
  )
}

export default TodoList