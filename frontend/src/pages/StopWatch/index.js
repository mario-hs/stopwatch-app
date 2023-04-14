import styles from "./stopwatch.module.css";
import { ControlButtons } from "./components/Buttons";
import { Timer } from "./components/Timer";
import { useEffect, useState } from "react";
import api from "../../services/Api";

const StopWatch = () => {
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(true);
  const [time, setTime] = useState(0);

  useEffect(() => {
    let interval = null;

    if (isActive && isPaused === false) {
      interval = setInterval(() => {
        setTime((time) => time + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [isActive, isPaused]);

  const handlePauseResume = () => {
    const params = {
      time: time,
      date: new Date(),
    };
    api.post("/time", params);
    setIsPaused(!isPaused);
  };

  const handleStart = () => {
    setIsActive(true);
    setIsPaused(false);
  };

  const handleReset = () => {
    setIsActive(false);
    setTime(0);
  };

  return (
    <main className={styles.stop_watch}>
      <Timer time={time} />
      <ControlButtons
        active={isActive}
        isPaused={isPaused}
        handleStart={handleStart}
        handlePauseResume={handlePauseResume}
        handleReset={handleReset}
      />
    </main>
  );
};

export { StopWatch };
