import React, { useContext } from 'react'
import styled from 'styled-components'
import { ChallengesContext } from '../contexts/ChallengeContext'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: 3.5rem 0;
  padding-bottom: 1rem;
  border-bottom: 1px solid #d7d8da;

  font-weight: 500;

  span {
    &:first-child {
      font-size: 1.25rem;
    }

    &:last-child {
      font-size: 1.5rem;
    }
  }
`

const CompletedChallenges: React.FC = () => {
  const { challengesCompleted } = useContext(ChallengesContext)

  let parsedChallengesCount: number = challengesCompleted
  if (typeof challengesCompleted !== 'number') {
    parsedChallengesCount = 0
  }

  return (
    <Wrapper>
      <span>Desafios completos</span>
      <span>{parsedChallengesCount}</span>
    </Wrapper>
  )
}

export default CompletedChallenges
