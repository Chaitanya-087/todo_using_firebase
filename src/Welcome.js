import React from 'react'
import { signInWithGoogle } from './Firebase/firebase-auth'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Welcome = () => {
    return (
        <div >
            <div className='welcome-nav-wrapper'>
                <div className='welcome-nav'>
                    <span className='logo'>TODOs</span>
                    <button className='btn-signin' onClick={signInWithGoogle}>Sign In</button>
                </div>
            </div>
            <div className='welcome-body'>
                <div className='welcome-text-container'>
                    <h1 className='welcome-body-text'>write todos to track your work<br/>business,studies</h1>
                    <p className='welcome-body-para'>Sign in to start creating todos and updating as wrok progress</p>
                <button className='btn-getstarted' onClick={signInWithGoogle}>Get Started <ArrowForwardIosIcon className='arrow-icon'/> </button>
                </div>
                <div className='waves'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0178ff" fillOpacity="0.8" d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
                </div>
            </div>
        </div>
    )
}

export default Welcome