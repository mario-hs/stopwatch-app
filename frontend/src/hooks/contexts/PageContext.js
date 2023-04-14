import { createContext } from "react";
import { useContext, useState } from "react";

export const PageContext = createContext();

export function PageContextProvider({ children }) {
  const [page, setPage] = useState("index");

  function togglePage(e) {
    setPage(e);
  }

  return (
    <PageContext.Provider value={{ page, togglePage }}>
      {children}
    </PageContext.Provider>
  );
}

export const usePage = () => {
  return useContext(PageContext);
};
