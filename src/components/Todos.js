import React, { useEffect,useState } from 'react'
import { db } from '../Firebase/firebase-config'
import { handleDelete } from '../Firebase/crud';
import {collection,query,onSnapshot} from "firebase/firestore";

import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const Todos = ({userId}) => {
  const [todos, setTodos] = useState([]);
  const [newTodo,setNewTodo] = useState();
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
  const [edit,setedit] = useState(Array(todos.length).fill(false));
  const handleEdit = async (todo,title) => {
    
  }
  return (
    <div className='todos-wrapper'>
      {
        todos.map((element,index) => {

         return (
         <div key={index} className='todo-container'>

          <p style={{textDecoration: element.completed ? 'line-through':'none'}} className = 'title'>{element.todo}</p>

          <div className='btns-container'>
            <IconButton>
              <CheckCircleIcon style={{color:element.completed ? 'rgb(1,121,255)' : 'grey'}} className='check'/>
            </IconButton>
            <IconButton style={{color:'#25D366'}} onClick={() => {}} >
                <EditIcon className='edit'/>
            </IconButton>
            <IconButton style = {{color:'#FF0000'}} onClick={() => handleDelete(element.id)} >
                <DeleteForeverIcon className='delete'/>
            </IconButton>
          </div>
         </div>)
        })
      }
    </div>
  )
}

export default Todos
