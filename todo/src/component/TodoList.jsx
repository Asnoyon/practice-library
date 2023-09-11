import React, { useState } from 'react'
import todo from "../images/todo.svg"
const TodoList = () => {
    const [input,setInput]=useState('')
    const [items,setItems]=useState([])
    
    // add items
    
    const addItem = ()=>{
      if(!input){

      } else{
        const allInputData = 
        
        //best way to declare unique id
        
        {id:new Date().getTime().toString(),name:input} 
        
    //Second way to Declare Random uinque id
        // {id:Math.floor(Math.random()*10),name:input}


        setItems([...items,allInputData])
        setInput('')
      }
      
    }


    // delete items
    const deleteItem=(index)=>{
        // console.log(index)
        const updateItems = items.filter((elem)=>{
            return index !== elem.id
        })
        setItems(updateItems)
    }

    // remove items
    const removeAll =()=>{
        setItems([])
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
                    <i className="fa fa-plus add-btn" title='Add Item' onClick={addItem}></i>
                </div>
                <div className="showItems">
                    {
                       items.map((elem)=>{
                        return(
                            <div className="eachItem" key={elem.id}>
                        <h3>{elem.name}</h3>
                        <i className="fa-solid fa-trash add-btn" title='Delete Item' onClick={()=>deleteItem(elem.id)}></i>
                    </div>
                        )
                       })
                    }
                </div>

                <div className="clearItem">
                    <button className='btn effect04' onClick={removeAll}><span>Clear List</span></button>
                </div>
            </div>
        </div>
    </>
  )
}

export default TodoList