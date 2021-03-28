import React, { useContext } from 'react'
import styled from 'styled-components'

import { ChallengesContext } from '../contexts/ChallengeContext'

const Wrapper = styled.div`
  display: flex;
  align-items: center;

  div {
    margin-left: 1.5rem;
  }

  div img {
    margin-right: 0.5rem;
  }

  strong {
    font-size: 1.5rem;
    font-weight: 600;
    color: ${props => props.theme.colors.title};
  }

  p {
    font-size: 1rem;
    margin-top: 0.5rem;
  }
`

const Avatar = styled.img`
  width: 5.5rem;
  height: 5.5rem;
  border-radius: 50%;
`

const Profile: React.FC = () => {
  const { level } = useContext(ChallengesContext)

  return (
    <Wrapper>
      <Avatar
        src="https://github.com/jbonadiman.png"
        alt="João Vitor Bonadiman"
      />
      <div>
        <strong>João Vitor Bonadiman</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level {level}
        </p>
      </div>
    </Wrapper>
  )
}

export default Profile
