import React from "react";
import DarkModeWrapper from "./DarkModeWrapper";
import Header from "./Header";
import TweetsContainer from "./TweetsContainer";
import { useState } from "react";

function App() {

  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(darkMode => !darkMode);
    console.log(darkMode);
  }

  return (
    <DarkModeWrapper darkMode={darkMode}>
      <Header toggleDarkMode={toggleDarkMode} darkMode={darkMode}/>
      <TweetsContainer />
    </DarkModeWrapper>
  );
}

export default App;
