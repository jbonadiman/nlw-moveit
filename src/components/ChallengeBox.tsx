import React, { useContext } from 'react'
import styled from 'styled-components'
import { ChallengesContext } from '../contexts/ChallengeContext'
import { CountdownContext } from '../contexts/CountdownContext'

const Wrapper = styled.div`
  height: 100%;

  background: ${props => props.theme.colors.white};
  border-radius: 5px;
  box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
  padding: 1.5rem 2rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  text-align: center;
`

const ActiveChallenge = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;

  header {
    color: ${props => props.theme.colors.blue};
    font-weight: 600;
    font-size: 1.25rem;
    padding: 0 2rem 1.5rem;
    border-bottom: 1px solid ${props => props.theme.colors.grayLine};
  }

  main {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  strong {
    font-size: 2rem;
    font-weight: 600;
    color: ${props => props.theme.colors.title};
    margin: 1.5rem 0 1rem;
  }

  p {
    line-height: 1.5;
  }

  footer {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }
`

const InactiveChallenge = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  strong {
    font-size: 1.5rem;
    font-weight: 500;
    line-height: 1.4;
  }

  p {
    display: flex;
    flex-direction: column;
    align-items: center;
    line-height: 1.4;
    max-width: 70%;
    margin-top: 3rem;
  }

  img {
    margin-bottom: 1rem;
  }
`

const Button = styled.button`
  height: 3rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 0;
  border-radius: 5px;

  color: ${props => props.theme.colors.white};

  font-size: 1rem;
  font-weight: 600;
  transition: filter 0.2s;

  background: ${props => props.theme.colors[`${props.color}`]};

  &:hover {
    filter: brightness(0.9);
  }
`

const ChallengeBox: React.FC = () => {
  const { activeChallenge, resetChallenge, completeChallenge } = useContext(
    ChallengesContext
  )
  const { resetCountdown } = useContext(CountdownContext)

  function handleChallengeSucceeded() {
    completeChallenge()
    resetCountdown()
  }

  function handleChallengeFailed() {
    resetChallenge()
    resetCountdown()
  }

  return (
    <Wrapper>
      {activeChallenge ? (
        <ActiveChallenge>
          <header>Ganhe {activeChallenge.amount} xp</header>
          <main>
            <img
              src={`icons/${activeChallenge.type}.svg`}
              alt="Tipo de desafio"
            />
            <strong>Novo desafio</strong>
            <p>{activeChallenge.description}</p>
          </main>
          <footer>
            <Button type="button" onClick={handleChallengeFailed} color="red">
              Falhei
            </Button>
            <Button
              type="button"
              onClick={handleChallengeSucceeded}
              color="green"
            >
              Completei
            </Button>
          </footer>
        </ActiveChallenge>
      ) : (
        <InactiveChallenge>
          <strong>Finalize um ciclo para receber um desafio </strong>
          <p>
            <img src="icons/level-up.svg" alt="Level Up" />
            Avance de level completando desafios
          </p>
        </InactiveChallenge>
      )}
    </Wrapper>
  )
}

export default ChallengeBox
