import React, { useState } from 'react'
import { auth } from './Firebase/firebase-config'
import AddTodo from './components/AddTodo.jsx'
import Todos from './components/Todos'
import { signOut } from './Firebase/firebase-auth'

const Home = () => {
    const [userid, setUserid] = useState('');

    auth.onAuthStateChanged((user) => {
        if (user) {
            setUserid(user.uid);
        }
    })

    return (
        <div className='home-wrapper'>

            <div className='navbar-wrapper'>
                <div className='navbar'>
                    <span className='logo'>TODOs</span>
                    <button className='signout' onClick={signOut}>Signout</button>
                </div>
            </div>

            <div className="home">
                <AddTodo userId={userid} />
                <Todos userId={userid} />
            </div>

        </div>
    )
}

export default Home