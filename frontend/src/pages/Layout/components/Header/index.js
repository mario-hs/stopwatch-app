import { ClockCountdown, Timer } from "@phosphor-icons/react";
import styles from "./header.module.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [active, setActive] = useState("stopWatch");
  return (
    <nav>
      <NavLink
        to="/"
        className={`${styles.content_icon} ${
          active === "stopWatch" && styles.active
        }`}
        onClick={(e) => setActive("stopWatch")}
      >
        <Timer size={28} color="var(--text-primary)" />
        <span>Inicio</span>
      </NavLink>

      <NavLink
        to="/history"
        className={`${styles.content_icon} ${
          active === "history" && styles.active
        }`}
        onClick={(e) => setActive("history")}
      >
        <ClockCountdown size={28} color="var(--icon)" />
        <span>Histórico</span>
      </NavLink>
    </nav>
  );
};

export { Header };
