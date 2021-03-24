import React, { useContext } from 'react'
import styled from 'styled-components'
import { ChallengesContext } from '../contexts/ChallengeContext'
import { CountdownContext } from '../contexts/CountdownContext'

const ChallengeWrapper = styled.div`
  height: 100%;

  background: var(--white);
  border-radius: 5px;
  box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
  padding: 1.5rem 2rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  text-align: center;
`

const InactiveTitle = styled.strong`
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 1.4;
`

const InactiveDescription = styled.p`
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 1.4;
  max-width: 70%;
  margin-top: 3rem;
`

const LevelUpLogo = styled.img`
  margin-bottom: 1rem;
`

const ActiveChallenge = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`

const InactiveChallenge = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Header = styled.header`
  color: ${props => props.theme.colors.blue};
  font-weight: 600;
  font-size: 1.25rem;
  padding: 0 2rem 1.5rem;
  border-bottom: 1px solid var(--gray-line);
`

const Main = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const ChallengeTitle = styled.strong`
  font-size: 2rem;
  font-weight: 600;
  color: ${props => props.theme.colors.title};
  margin: 1.5rem 0 1rem;
`

const ChallengeDescription = styled.p`
  line-height: 1.5;
`

const Footer = styled.footer`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
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
    <ChallengeWrapper>
      {activeChallenge ? (
        <ActiveChallenge>
          <Header>Ganhe {activeChallenge.amount} xp</Header>
          <Main>
            <img
              src={`icons/${activeChallenge.type}.svg`}
              alt="Tipo de desafio"
            />
            <ChallengeTitle>Novo desafio</ChallengeTitle>
            <ChallengeDescription>
              {activeChallenge.description}
            </ChallengeDescription>
          </Main>
          <Footer>
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
          </Footer>
        </ActiveChallenge>
      ) : (
        <InactiveChallenge>
          <InactiveTitle>
            Finalize um ciclo para receber um desafio{' '}
          </InactiveTitle>
          <InactiveDescription>
            <LevelUpLogo src="icons/level-up.svg" alt="Level Up" />
            Avance de level completando desafios
          </InactiveDescription>
        </InactiveChallenge>
      )}
    </ChallengeWrapper>
  )
}

export default ChallengeBox
