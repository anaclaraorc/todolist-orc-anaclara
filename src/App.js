

import './App.css';
import {IoMdAdd} from 'react-icons/io'
import {BiTrash} from 'react-icons/bi'
import './styles.css'
import {useState} from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  const[complete, setComplete] = useState(true)
  const[task, setTask] = useState(" ")
  const[tasks, setTasks] = useState([])
  const handleCreateTask = () => {
    
    if(task === " "){
      toast.error("Nada foi digitado aqui!")
    
    }else{
      const idRandom = (num) => Math.floor(Math.random() * num)
      const newTask = {id: idRandom(1253279) , title: task, isComplete: false }
      setTasks([...tasks, newTask])
      setTask(" ")
    }
  }

  function handleDelete(id) {
    setTasks(tasks.filter(remove => remove.id !== id))
    toast.success("Removido com sucesso!")
  }
  
  return (
    <div className="App">
      <ToastContainer/>
      <div className='todo'>
        <h2 align = "center">Lista de tarefas</h2>
        <p align = "center">Hora de organizar suas tarefas!</p>
        <p>Digite abaixo:</p>
        <header>
          <input type="text" value={task} onChange={(ev) => setTask(ev. target.value)}/>
          <button onClick={handleCreateTask} ><IoMdAdd/></button>
        </header>

        {tasks.map(task => (
          <div key={task.id} className={task.isComplete ? 'task-container completed' : 'task-container'}>
            <div className='check-and-title'>
              <label className= "checkbox-container">
                <input type="checkbox"/>
                <p className='checkmark'></p>
              </label>
              <p>{task.title}</p>
            </div>
           
            <div>
              <BiTrash onClick ={() => handleDelete(task.id)}/>
            </div>
        </div>    
        ))}
      </div>   
    </div>     
  );
}
export default App;