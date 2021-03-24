import React, { useContext } from 'react'
import styled from 'styled-components'
import { ChallengesContext } from '../contexts/ChallengeContext'

const CompletedChallengesWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: 3.5rem 0;
  padding-bottom: 1rem;
  border-bottom: 1px solid #d7d8da;

  font-weight: 500;
`

const Text = styled.span`
  &:first-child {
    font-size: 1.25rem;
  }

  &:last-child {
    font-size: 1.5rem;
  }
`

const CompletedChallenges: React.FC = () => {
  const { challengesCompleted } = useContext(ChallengesContext)

  return (
    <CompletedChallengesWrapper>
      <Text>Desafios completos</Text>
      <Text>{challengesCompleted}</Text>
    </CompletedChallengesWrapper>
  )
}

export default CompletedChallenges
