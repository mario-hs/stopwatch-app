import { ApplicationDataContextProvider } from "./hooks/contexts/ApplicationDataContext";
import { ThemeContextProvider } from "./hooks/contexts/ThemeContext";
import { Router } from "./routes/Routes";

function App() {
  return (
    <ApplicationDataContextProvider>
      <ThemeContextProvider>
        <Router />
      </ThemeContextProvider>
    </ApplicationDataContextProvider>
  );
}

export default App;
