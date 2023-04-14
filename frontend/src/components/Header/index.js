import { Moon, SunDim } from "@phosphor-icons/react";
import styles from "./header.module.css";
import { Filter } from "../Filter";
import { useTheme } from "../../hooks/contexts/ThemeContext";
import { usePage } from "../../hooks/contexts/PageContext";
import { useState } from "react";

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const [inputs, setInputs] = useState("all");

  const { page } = usePage();

  function handleFilter(type) {
    setInputs(type);
  }

  function handleOnSubmit() {}

  return (
    <header>
      <div
        className={styles.container_header}
        style={
          page === "index"
            ? { justifyContent: "center" }
            : { justifyContent: "space-between" }
        }
      >
        {page === "story" && <Filter handleCallback={handleFilter} />}

        {theme === "dark" ? (
          <SunDim size={28} onClick={toggleTheme} weight="duotone" />
        ) : (
          <Moon size={28} onClick={toggleTheme} weight="duotone" />
        )}
      </div>
      {page === "story" && (
        <>
          <div
            className={styles.wrapper_inputs}
            style={
              inputs === "all" ? { opacity: 0, pointerEvents: "none" } : {}
            }
          >
            <input type="date" name="" id="" />
            {inputs === "period" && <input type="date" name="" id="" />}
          </div>
          <button
            className={styles.button_filter}
            type="submit"
            onClick={handleOnSubmit}
          >
            Filtrar
          </button>
        </>
      )}
    </header>
  );
};

export { Header };
