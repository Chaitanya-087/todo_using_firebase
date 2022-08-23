import React, { useEffect,useState } from 'react'
import { db } from '../Firebase/firebase-config'
import { handleDelete } from '../Firebase/crud';
import {collection,query,onSnapshot, updateDoc,doc} from "firebase/firestore";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import IconButton from '@mui/material/IconButton';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const Todos = ({userId}) => {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    const q = query(collection(db,"todos"));
    const unsub = onSnapshot(q,(snapshot) => {
      let todosarray = [];
      snapshot.forEach((doc) => {
        if (doc.data().userId === userId) {
          todosarray.push({...doc.data(),id:doc.id});
        }
      })
      setTodos(todosarray);
    })
    return () => unsub()
  },[userId]);

  const toggleCheck = async (todo) => {
    await updateDoc(doc(db,'todos',todo.id),{completed: !todo.completed})
  }

    return  (todos.length > 0) ? 
    
          
    <div className='todos-wrapper'>
    {
      todos.map((element,index) => {

       return (
       <div key={index} className='todo-container'>
        <p style={{textDecoration: element.completed ? 'line-through':'none'}} className = 'title'>{element.todo}</p>
        <hr className='horizontal'/>
        <div className='btns-container'>
          <IconButton onClick={() => {toggleCheck(element)}}>
            <CheckCircleIcon style={{color:element.completed ? 'rgb(1,121,255)' : 'grey'}} className='check'/>
          </IconButton>
          <IconButton style = {{color:'#FF0000'}} onClick={() => handleDelete(element.id)} >
              <DeleteForeverIcon className='delete'/>
          </IconButton>
        </div>
       </div>)
      })
    }
  </div>
  : <p className="empty-message">No todos yet! Create to track</p> 
}

export default Todos
