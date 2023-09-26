import React, { useState } from "react";
import myContext from "./myContext";

export default function MyState(props) {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      document.body.style.backgroundColor = "rgb(19,24,39)";
    } else {
      setTheme("light");
      document.body.style.backgroundColor = "white";
    }
  };

  const [loading, setLoading] = useState(false);
  

  return (
    <myContext.Provider value={{ theme, toggleTheme, loading, setLoading }}>
      {props.children}
    </myContext.Provider>
  );
}
