import { useState } from "react";

import Navbar from "./components/Navbar";
import Main from "./components/Main";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  function handleDarkMode() {
    setDarkMode(!darkMode);
  }

  return (
    <div className={darkMode ? "dark" : ""}>
      <Navbar toggleDarkMode={handleDarkMode} darkMode={darkMode} />
      <Main darkMode={darkMode} />
    </div>
  );
}

export default App;
