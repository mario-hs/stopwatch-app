import { DataContextProvider } from "./hooks/contexts/DataContent";
import { PageContextProvider } from "./hooks/contexts/PageContext";
import { ThemeContextProvider } from "./hooks/contexts/ThemeContext";
import { Router } from "./routes/Routes";

function App() {
  return (
    <DataContextProvider>
      <PageContextProvider>
        <ThemeContextProvider>
          <Router />
        </ThemeContextProvider>
      </PageContextProvider>
    </DataContextProvider>
  );
}

export default App;
