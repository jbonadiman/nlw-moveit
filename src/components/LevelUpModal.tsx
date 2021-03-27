import React, { useContext } from 'react'
import styled from 'styled-components'
import { ChallengesContext } from '../contexts/ChallengeContext'

const Overlay = styled.div`
  background: rgba(242, 243, 245, 0.8);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  display: flex;
  justify-content: center;
  align-items: center;
`

const Modal = styled.div`
  background: ${props => props.theme.colors.white};
  width: 100%;
  max-width: 400px;
  padding: 2rem 3rem;
  border-radius: 5px;
  box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
  text-align: center;
  position: relative;
`

const Header = styled.header`
  font-size: 8.75rem;
  font-weight: 600;
  color: ${props => props.theme.colors.blue};
  background: url('/icons/levelup.svg') no-repeat center;
  background-size: contain;
`

const Title = styled.strong`
  font-size: 2.25rem;
  color: ${props => props.theme.colors.title};
`

const Content = styled.p`
  font-size: 1.25rem;
  color: ${props => props.theme.colors.text};
  margin-top: 0.25rem;
`

const CloseButton = styled.button`
  position: absolute;
  right: 0.5rem;
  top: 0.5rem;
  background: transparent;
  border: 0;
  font-size: 0;
`

const LevelUpModal: React.FC = () => {
  const { level, closeLevelUpModal } = useContext(ChallengesContext)

  return (
    <Overlay>
      <Modal>
        <Header>{level}</Header>
        <Title>Parabéns</Title>
        <Content>Você alcançou um novo level.</Content>
        <CloseButton type="button" onClick={closeLevelUpModal}>
          <img src="/icons/close.svg" alt="Fechar modal" />
        </CloseButton>
      </Modal>
    </Overlay>
  )
}

export default LevelUpModal
