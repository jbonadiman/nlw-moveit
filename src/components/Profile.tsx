import React, { useContext } from 'react'
import styled from 'styled-components'

import { ChallengesContext } from '../contexts/ChallengeContext'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`

const Avatar = styled.img`
  width: 5.5rem;
  height: 5.5rem;
  border-radius: 50%;
`

const InformationsWrapper = styled.div`
  margin-left: 1.5rem;
`

const Name = styled.strong`
  font-size: 1.5rem;
  font-weight: 600;
  color: ${props => props.theme.colors.title};
`

const Level = styled.p`
  font-size: 1rem;
  margin-top: 0.5rem;
`

const LevelIcon = styled.img`
  margin-right: 0.5rem;
`

const Profile: React.FC = () => {
  const { level } = useContext(ChallengesContext)

  return (
    <Wrapper>
      <Avatar
        src="https://github.com/jbonadiman.png"
        alt="João Vitor Bonadiman"
      />
      <InformationsWrapper>
        <Name>João Vitor Bonadiman</Name>
        <Level>
          <LevelIcon src="icons/level.svg" alt="Level" />
          Level {level}
        </Level>
      </InformationsWrapper>
    </Wrapper>
  )
}

export default Profile
