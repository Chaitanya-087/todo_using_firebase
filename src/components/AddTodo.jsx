import { addTodo } from '../Firebase/crud';
import { useState } from 'react';

const AddTodo = ({userId}) => {
    const [todo, setTodo] = useState('');

    const submitHandler = () => {
        addTodo(todo,userId);
        setTodo('')
    }
    
  return (
    <div className='addTodo'>
        <input className='todo-input'
                type="text" 
                placeholder="Enter Todo..."
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
            />
        <button className = 'btn-submit' type='submit' onClick={submitHandler}>Add</button>
    </div>

  )
}

export default AddTodo
