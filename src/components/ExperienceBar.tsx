import React, { useContext } from 'react'
import styled from 'styled-components'
import { ChallengesContext } from '../contexts/ChallengeContext'

const Bar = styled.header`
  display: flex;
  align-items: center;

  span {
    font-size: 1rem;
  }
`

const Progress = styled.div`
  flex: 1;
  height: 4px;
  border-radius: 4px;
  background: ${props => props.theme.colors.grayLine};
  margin: 0 1.5rem;
  position: relative;

  span {
    font-size: 1rem;

    position: absolute;
    top: 12px;
    transform: translateX(-50%);
    left: 0;
  }

  div {
    width: 0;
    height: 4px;
    border-radius: 4px;
    background: ${props => props.theme.colors.green};
  }
`

const ExperienceBar: React.FC = () => {
  const {
    currentExperience: unparsedExperience,
    experienceToNextLevel
  } = useContext(ChallengesContext)

  let currentExperience = unparsedExperience
  if (typeof currentExperience !== 'number') {
    currentExperience = 0
  }

  const percentToNextLevel =
    Math.round(currentExperience * 100) / experienceToNextLevel

  return (
    <Bar>
      <span>0 xp</span>
      <Progress>
        <div style={{ width: `${percentToNextLevel}%` }} />
        <span style={{ left: `${percentToNextLevel}%` }}>
          {currentExperience} xp
        </span>
      </Progress>
      <span>{experienceToNextLevel} xp</span>
    </Bar>
  )
}

export default ExperienceBar
