import { createContext } from "react";
import { useContext, useState } from "react";

export const ThemeContext = createContext();

export function ThemeContextProvider({ children }) {
  const [theme, setTheme] = useState("dark");
  const [page, setPage] = useState("index");

  function toggleTheme() {
    theme === "light" ? setTheme("dark") : setTheme("light");
  }
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => {
  return useContext(ThemeContext);
};
