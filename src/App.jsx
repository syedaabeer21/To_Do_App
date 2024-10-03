import { useState } from "react"
import { useRef } from "react"
import "./App.css"

function App(){
    const input = useRef()
    const [task , setTask] = useState([])

    const addTask = (event)=>{
      event.preventDefault()
      console.log(input.current.value)
      task.push({title:input.current.value , id:Date.now()})
      setTask([...task])
      input.current.value = ""
    }
    const editTask = (index) => {
      console.log('edited',index);
      const newTask = prompt("Edit task:", task[index].title);
  
      const updatedTasks = task.map((item, id) => 
        id === index ? { ...item, title: newTask } : item
      );
      setTask(updatedTasks); 
    }
    const deleteTask = (index)=>{
         console.log('todo deleted' , index);
          task.splice(index , 1);
          setTask([...task]);
    }
  return(
    <>
      <h1>TO DO LIST</h1>
      <form onSubmit={addTask}>
        <input type="text" placeholder="Enter Task" ref={input}/><br/><br/>
        <button type="submit">Add Task</button>
      </form>

      <ol>
        {task.length > 0 ? task.map((item,index)=>{
          return <li key={index}>{item.title}
          <div>
          <button onClick={()=> deleteTask(index)}>Delete</button>
          <button onClick={()=> editTask(index)}>Edit</button>
          </div>
          </li>

          
       }) : <h1>No item found...</h1>}
       </ol>
    </>
 )
 }
export default App;



