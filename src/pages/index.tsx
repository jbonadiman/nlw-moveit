import React from 'react'

import Head from 'next/head'
import { GetServerSideProps } from 'next'

import CompletedChallenges from '../components/CompletedChallenges'
import Countdown from '../components/Countdown'
import ExperienceBar from '../components/ExperienceBar'
import ChallengeBox from '../components/ChallengeBox'
import Profile from '../components/Profile'

import styles from '../styles/pages/Home.module.css'
import { CountdownProvider } from '../contexts/CountdownContext'
import { ChallengesProvider } from '../contexts/ChallengeContext'
import { ThemeProvider } from 'styled-components'
import lightTheme from '../styles/lightTheme'

interface HomeProps {
  children: React.FC
  level: number
  currentExperience: number
  challengesCompleted: number
}

const Home: React.FC = (props: HomeProps) => {
  return (
    <ThemeProvider theme={lightTheme}>
      <ChallengesProvider
        level={props.level}
        currentExperience={props.currentExperience}
        challengesCompleted={props.challengesCompleted}
      >
        <div className={styles.container}>
          <Head>
            <link rel="shortcut icon" href="favicon.png" type="image/png" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link
              href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Rajdhani:wght@600&display=swap"
              rel="stylesheet"
            />
            <title>Início | move.it</title>
          </Head>

          <ExperienceBar />

          <CountdownProvider>
            <section>
              <div>
                <Profile />
                <CompletedChallenges />
                <Countdown />
              </div>
              <div>
                <ChallengeBox />
              </div>
            </section>
          </CountdownProvider>
        </div>
      </ChallengesProvider>
    </ThemeProvider>
  )
}

export default Home

export const getServerSideProps: GetServerSideProps = async ctx => {
  const { level, currentExperience, challengesCompleted } = ctx.req.cookies

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted)
    }
  }
}
