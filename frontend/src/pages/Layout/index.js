import { Outlet } from "react-router-dom";
import { Header } from "./components/Header";
import { useTheme } from "../../hooks/contexts/ThemeContext";
import styles from "../../assets/css/styles.module.css";
import "../../assets/css/light.module.css";
import "../../assets/css/dark.module.css";

const Layout = () => {
  const { theme } = useTheme();

  return (
    <div data-theme={theme} className={styles.container}>
      <Header />
      {/* {isPeding && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {!isPeding && !error && <Outlet />} */}
      <Outlet />
    </div>
  );
};

export { Layout };
