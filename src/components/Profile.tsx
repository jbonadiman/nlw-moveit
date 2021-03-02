import styles from '../styles/components/Profile.module.css'
import {useContext} from "react";
import {ChallengesContext} from "../contexts/ChallengeContext";

export function Profile() {
  const { level } = useContext(ChallengesContext);

  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/jbonadiman.png" alt="João Vitor Bonadiman" />
      <div>
        <strong>João Vitor Bonadiman</strong>
        <p>
          <img src="icons/level.svg" alt="Level"/>
          Level {level}
        </p>
      </div>
    </div>
  );
}