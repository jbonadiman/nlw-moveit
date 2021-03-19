import React, { useContext } from "react";
import styles from "../styles/components/Profile.module.css";

import { ChallengesContext } from "../contexts/ChallengeContext";

export function Profile() {
  const { level } = useContext(ChallengesContext);

  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/jbonadiman.png" alt="João Vitor Bonadiman" />
      <div>
        <strong>João Vitor Bonadiman</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level {level}
        </p>
      </div>
    </div>
  );
}
