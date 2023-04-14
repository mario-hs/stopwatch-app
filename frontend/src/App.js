import { PageContextProvider } from "./hooks/contexts/PageContext";
import { ThemeContextProvider } from "./hooks/contexts/ThemeContext";
import { Router } from "./routes/Routes";

function App() {
  return (
    <PageContextProvider>
      <ThemeContextProvider>
        <Router />
      </ThemeContextProvider>
    </PageContextProvider>
  );
}

export default App;
