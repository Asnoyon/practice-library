import React, { useState } from 'react'
import todo from "../images/todo.svg"
const TodoList = () => {
    const [input,setInput]=useState('')
    const [items,setItems]=useState([])
    const addItem = ()=>{

    }
  return (
    <>
        <div className="main-div">
            <div className="child-div">
                <figure>
                    <img src={todo} alt="todo_logo" />
                    <figcaption>Add Your List Here</figcaption>
                </figure>

                <div className="addItems">
                    <input type="text" placeholder="✍ Add your items" value={input}  onChange={(e)=>setInput(e.target.value)}/>
                    <i class="fa fa-plus add-btn" title='Add Item' onClick={addItem}></i>
                </div>
                <div className="showItems">
                    <div className="eachItem">
                        <h3>Apple</h3>
                        <i class="fa-solid fa-trash add-btn" title='Delete Item'></i>
                    </div>
                </div>

                <div className="clearItem">
                    <button className='btn effect04'><span>Check List</span></button>
                </div>
            </div>
        </div>
    </>
  )
}

export default TodoList