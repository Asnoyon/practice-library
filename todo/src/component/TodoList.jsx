import React, { useState } from 'react'
import todo from "../images/todo.svg"
const TodoList = () => {
    const [input,setInput]=useState('')
    const [items,setItems]=useState([])
    const [toggle,setToggle]= useState(true)
    // add items
    
    const addItem = ()=>{
      if(!input){

      } else{
         //best way to declare unique id
        const allInputData = {id:new Date().getTime().toString(),name:input} 
        
        //Second way to Declare Random uinque id
        // {id:Math.floor(Math.random()*10),name:input}

        setItems([...items,allInputData])
        setInput('')
      }
      
    }


    // delete items
    const deleteItem=(dId)=>{
        // console.log(index)
        const updateItems = items.filter((elem)=>{
            return dId !== elem.id
        })
        setItems(updateItems)
    }
        // edit items

    const editItem=(eId)=>{
        let newEditItem = items.filter((elem)=>{
            return eId=== elem.id
        })
        console.log(newEditItem);
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

                    //toggle icon plus to edit update
                    {

                    }
                </div>
                <div className="showItems">
                    {
                       items.map((elem)=>{
                        return(
                            <div className="eachItem" key={elem.id}>
                        <h3>{elem.name}</h3>
                        <div className="todo_btn">
                            <i className="fa-solid fa-edit add-btn" title='Edit Item' onClick={()=>editItem(elem.id)}></i>
                            <i className="fa-solid fa-trash add-btn" title='Delete Item' onClick={()=>deleteItem(elem.id)}></i>
                        </div>
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