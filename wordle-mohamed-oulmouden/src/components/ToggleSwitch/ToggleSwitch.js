import React, { useContext, useEffect } from "react";
import styles from "./ToggleSwitch.module.css";
import GameContext from "../../context/GameContext";

const ToggleSwitch = () => {
  const {darkMode, setDarkMode} = useContext(GameContext)

  useEffect(() => {
      if (darkMode) {
        LightMode();
      } else {
        DarkMode();
      }
  }
  , [darkMode]);

  const DarkMode = () => {
    document.querySelector("body").setAttribute("data-theme", "dark");
  };

  const LightMode = () => {
    document.querySelector("body").setAttribute("data-theme", "light");
  };

  return (
    <div className={styles.container}>
      <label
        className={`${styles.toggle} ${darkMode ? `${styles.checked}` : ""}`}
        onClick={(e) => {
          e.preventDefault();
          setDarkMode(!darkMode);
          
        }}
      >
        <input
          className={styles.input}
          type="checkbox"
          checked={darkMode}
          readOnly
        />
        <div
          className={`${styles.icon} ${styles.iconMoon} ${
            darkMode ? styles.hidden : ""
          }`}
        >
          <img src="/assets/icons/dark.svg" alt="dark"></img>
        </div>
        <div
          className={`${styles.icon} ${styles.iconSun} ${
            darkMode ? "" : styles.hidden
          }`}
        >
          <img
            alt="light"
            src="/assets/icons/light.svg"
            style={{ width: "32px", height: "32px" }}
          ></img>
        </div>
      </label>
    </div>
  );
};

export default ToggleSwitch;
