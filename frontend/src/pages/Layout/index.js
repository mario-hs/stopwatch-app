import { Outlet } from "react-router-dom";
import { useTheme } from "../../hooks/contexts/ThemeContext";
import styles from "../../assets/css/styles.module.css";
import "../../assets/css/light.module.css";
import "../../assets/css/dark.module.css";
import { Navigation } from "./components/Navigation";
import { Header } from "../../components/Header";

const Layout = () => {
  const { theme } = useTheme();

  return (
    <div data-theme={theme} className={styles.container}>
      <Header />
      {/* {isPeding && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {!isPeding && !error && <Outlet />} */}
      <Outlet />
      <Navigation />
    </div>
  );
};

export { Layout };
