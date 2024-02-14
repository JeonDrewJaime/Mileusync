import HomePage from "./Pages/HomePage";
import Navbar from "./Widgets/Navbar";
import React, { useState } from 'react';


function App() {
  const [isDark, setIsClicked] = useState(false);

  const handleButtonClick = () => {
    setIsClicked(!isDark);
  
  };
  return (
    <div sx = {{backgroundColor: isDark? "black" : "#FFFFFF"}}>
    <Navbar isDark={isDark} handleButtonClick={handleButtonClick} />
 
  </div>
  )
}

export default App
