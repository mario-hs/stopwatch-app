import { ClockCountdown, Timer } from "@phosphor-icons/react";
import styles from "./navigation.module.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { usePage } from "../../../../hooks/contexts/PageContext";

const Navigation = () => {
  const { page, togglePage } = usePage();

  return (
    <nav>
      <NavLink
        to="/"
        className={`${styles.content_icon} ${
          page === "index" && styles.active
        }`}
        onClick={() => togglePage("index")}
      >
        <Timer size={28} color="var(--text-primary)" />
        <span>Inicio</span>
      </NavLink>

      <NavLink
        to="/history"
        className={`${styles.content_icon} ${
          page === "story" && styles.active
        }`}
        onClick={() => togglePage("story")}
      >
        <ClockCountdown size={28} color="var(--icon)" />
        <span>Histórico</span>
      </NavLink>
    </nav>
  );
};

export { Navigation };
