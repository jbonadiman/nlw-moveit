import React, { useContext } from 'react'
import styled from 'styled-components'
import { ChallengesContext } from '../contexts/ChallengeContext'

const Bar = styled.header`
  display: flex;
  align-items: center;
`

const Text = styled.span`
  font-size: 1rem;
`

const CurrentExperience = styled(Text)`
  position: absolute;
  top: 12px;
  transform: translateX(-50%);
`

const UnfilledProgress = styled.div`
  flex: 1;
  height: 4px;
  border-radius: 4px;
  background: ${props => props.theme.colors.grayLine};
  margin: 0 1.5rem;
  position: relative;
`

const Progress = styled.div`
  height: 4px;
  border-radius: 4px;
  background: ${props => props.theme.colors.green};
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
      <Text>0 xp</Text>
      <UnfilledProgress>
        <Progress style={{ width: `${percentToNextLevel}%` }} />
        <CurrentExperience style={{ left: `${percentToNextLevel}%` }}>
          {currentExperience} xp
        </CurrentExperience>
      </UnfilledProgress>
      <Text>{experienceToNextLevel} xp</Text>
    </Bar>
  )
}

export default ExperienceBar
