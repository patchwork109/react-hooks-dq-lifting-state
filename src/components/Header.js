import React, { useState } from "react";
import Menu from "./Menu";

function Header({toggleDarkMode, darkMode}) {
  // const [darkMode, setDarkMode] = useState(false);

  // const toggleDarkMode = () => {
  //   setDarkMode(darkMode => !darkMode);
  //   console.log(darkMode);
  // }

  console.log(toggleDarkMode);

  return (
    <div className={`ui fixed menu ${darkMode ? "inverted" : ""}`}>
      <div className="menu item">Fwitter</div>
      <div className="right menu">
        <Menu toggleDarkMode={toggleDarkMode}/>
      </div>
    </div>
  );
}

export default Header;
