import styles from "./button.module.css";

const ControlButtons = (props) => {
  return (
    <section className={styles.control_button}>
      <>
        {props.active ? (
          props.isPaused ? (
            <div className={styles.button}>
              <div className={styles.button_border} onClick={props.handleReset}>
                <p>Finish</p>
              </div>
            </div>
          ) : (
            <div className={styles.button}>
              <div
                className={styles.button_border}
                onClick={props.handlePauseResume}
              >
                <p>Stop</p>
              </div>
            </div>
          )
        ) : (
          <div className={styles.button}>
            <div className={styles.button_border} onClick={props.handleStart}>
              <p>Start</p>
            </div>
          </div>
        )}
      </>
    </section>
  );
};

export { ControlButtons };
