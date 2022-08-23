import Home from "./Home";
import { Routes,Route} from "react-router-dom";
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
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
    );
  }
    return (
        <Routes>
          <Route path="/" element={<Welcome/>} />
        </Routes>
    );
}

export default App;
