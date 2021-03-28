import React, { useContext } from 'react'
import styled from 'styled-components'
import { CountdownContext } from '../contexts/CountdownContext'

const CountdownWrapper = styled.div`
  display: flex;
  align-items: center;
  font-family: Rajdhani, serif;
  font-weight: 600;
  color: ${props => props.theme.colors.title};

  span {
    font-size: 6.25rem;
    margin: 0 0.5rem;
  }
`

const Digits = styled(CountdownWrapper)`
  flex: 1;

  display: flex;
  align-items: center;
  justify-content: space-evenly;

  background: ${props => props.theme.colors.white};
  box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
  border-radius: 5px;
  font-size: 8.5rem;
  text-align: center;

  span {
    &:first-child {
      border-right: 1px solid #f0f1f3;
    }

    &:last-child {
      border-left: 1px solid #f0f1f3;
    }
  }
`

const Button = styled.button`
  width: 100%;
  height: 5rem;

  margin-top: 2rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 0;
  border-radius: 5px;

  font-size: 1.25rem;
  font-weight: 600;

  transition: background-color 0.2s;

  &:disabled {
    background: ${props => props.theme.colors.white};
    color: ${props => props.theme.colors.text};
    cursor: not-allowed;
  }
`

const StartCycleButton = styled(Button)`
  background: ${props => props.theme.colors.blue};
  color: ${props => props.theme.colors.white};

  &:hover {
    background: ${props => props.theme.colors.darkBlue};
  }
`

const AbandonCycleButton = styled(Button)`
  background: ${props => props.theme.colors.white};
  color: ${props => props.theme.colors.title};

  &:hover {
    background: ${props => props.theme.colors.red};
    color: ${props => props.theme.colors.white};
  }
`

const Countdown: React.FC = () => {
  const {
    minutes,
    seconds,
    hasFinished,
    isActive,
    startCountdown,
    resetCountdown
  } = useContext(CountdownContext)

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('')
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('')

  return (
    <div>
      <CountdownWrapper>
        <Digits>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </Digits>
        <span>:</span>
        <Digits>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </Digits>
      </CountdownWrapper>

      {hasFinished ? (
        <Button disabled> Ciclo encerrado</Button>
      ) : (
        <>
          {isActive ? (
            <AbandonCycleButton type="button" onClick={resetCountdown}>
              Abandonar ciclo
            </AbandonCycleButton>
          ) : (
            <StartCycleButton type="button" onClick={startCountdown}>
              Iniciar um ciclo
            </StartCycleButton>
          )}
        </>
      )}
    </div>
  )
}

export default Countdown
