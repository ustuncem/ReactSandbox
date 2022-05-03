import { useState, useEffect } from "react";

import Navbar from "./components/Navbar";
import Main from "./components/Main";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  function handleDarkMode() {
    setDarkMode(!darkMode);
  }

  return (
    <>
      <Navbar toggleDarkMode={handleDarkMode} darkMode={darkMode} />
      <Main darkMode={darkMode} />
    </>
  );
}

export default App;
