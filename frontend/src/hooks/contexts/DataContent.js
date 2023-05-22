import { createContext } from "react";
import { useContext, useState } from "react";

export const DataContext = createContext();

export function DataContextProvider({ children }) {
  const [history, setHistory] = useState();
  const [historyFilter, setHistoryFilter] = useState();
  const [filter, setFilter] = useState({
    type: "all",
    order: true,
    startDate: "",
    endDate: "",
  });

  function filterHistory() {
    let newHistory;
    if (filter.type === "period") {
      newHistory = filterByPeriod;
    } else if (filter.type === "date") {
      newHistory = filterByDate;
    } else {
      newHistory = history;
    }

    if (filter.order) {
      newHistory = sortDescending(newHistory);
    } else {
      newHistory = sortAscending(newHistory);
    }

    setHistoryFilter(newHistory);
  }

  function filterByPeriod() {
    const startDate = filter.startDate.replaceAll("-", "");
    const endDate = filter.endDate.replaceAll("-", "");
    const newHistory = history.filter((item) => {
      const data = item.date.substring(0, 10).replaceAll("-", "");
      return (
        Number(data) >= Number(startDate) && Number(data) <= Number(endDate)
      );
    });
    filter[startDate] = "";
    filter[endDate] = "";

    return newHistory;
  }

  function filterByDate() {
    const startDate = filter.startDate.replaceAll("-", "");
    const newHistory = history.filter((item) => {
      const data = item.date.substring(0, 10).replaceAll("-", "");
      return Number(data) === Number(startDate);
    });
    filter[startDate] = "";

    return newHistory;
  }

  function sortDescending(newHistory) {
    newHistory.sort((a, b) => {
      if (Number(a.time) > Number(b.time)) return -1;
      if (Number(a.time) < Number(b.time)) return 1;
      return 0;
    });
    return newHistory;
  }

  function sortAscending(newHistory) {
    newHistory.sort((a, b) => {
      if (Number(a.time) > Number(b.time)) return 1;
      if (Number(a.time) < Number(b.time)) return -1;
      return 0;
    });
    return newHistory;
  }

  return (
    <DataContext.Provider
      value={{
        filter,
        setFilter,
        history,
        setHistory,
        historyFilter,
        setHistoryFilter,
        filterHistory,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export const useData = () => {
  return useContext(DataContext);
};
