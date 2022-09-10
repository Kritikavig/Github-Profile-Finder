//Providing theme to all the components 
import { createContext, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");

  return (
    // providing value of theme to all the children
    <ThemeContext.Provider value={{ theme, setTheme }}> 
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
