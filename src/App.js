import Home from "./Home";
import {BrowserRouter as Router, Routes,Route} from "react-router-dom";
import { auth } from './Firebase/firebase-config';
import { useState } from "react";
import Welcome from "./Welcome.js";

function App() {
  const [isUserSignedIn, setIsUserSignedIn] = useState(false);  
  
  auth.onAuthStateChanged(user => {
    if (user) {
      setIsUserSignedIn(true);
    } else {
      setIsUserSignedIn(false);
    }
  })

  if (isUserSignedIn) {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    );
  }
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Welcome/>} />
        </Routes>
      </Router>
    );
}

export default App;
