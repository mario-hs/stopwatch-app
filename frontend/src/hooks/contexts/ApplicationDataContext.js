import { createContext } from "react";
import { useContext, useState } from "react";

export const ApplicationDataContext = createContext();

export function ApplicationDataContextProvider({ children }) {
  const [offset, setOffset] = useState(0);
  const [comics, setComics] = useState([]);

  function handleData(data) {
    setComics([...comics, ...data.results]);
    setOffset(data.offset);
  }

  return (
    <ApplicationDataContext.Provider
      value={{
        handleData,
        offset,
        comics,
      }}
    >
      {children}
    </ApplicationDataContext.Provider>
  );
}

export const useApplicationData = () => {
  return useContext(ApplicationDataContext);
};
