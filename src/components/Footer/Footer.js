import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiscord, faTelegram, faTwitter, faGithub, } from '@fortawesome/free-brands-svg-icons'

import Container from '../Container'

const StyledFooter = styled.footer`
  align-items: center;
  color: #FFF;
  display: flex;
  height: 96px;
  justify-content: center;
`

const StyledSocialIcon = styled.a`
  align-items: center;
  color: #FFF;
  display: flex;
  height: 44px;
  justify-content: center;
  opacity: 0.5;
  margin: 10px;
  transition: opacity .2s;
  width: 44px;
  &:hover {
    opacity: 1;
  }
`

const Footer = () => (
  <Container>
    <StyledFooter>
      <StyledSocialIcon target="_blank" href="https://twitter.com/ToroidFinance">
        <FontAwesomeIcon icon={faTwitter} size="lg" />
      </StyledSocialIcon>
      <StyledSocialIcon target="_blank" href="https://t.me/ToroidFinance">
        <FontAwesomeIcon icon={faTelegram} size="lg" />
      </StyledSocialIcon>
      <StyledSocialIcon target="_blank" href="https://discord.gg/AUZyJJV4QC">
        <FontAwesomeIcon icon={faDiscord} size="lg" />
      </StyledSocialIcon>
      <StyledSocialIcon target="_blank" href="https://github.com/ToroidFinance">
        <FontAwesomeIcon icon={faGithub} size="lg" />
      </StyledSocialIcon>
    </StyledFooter>
  </Container>
)

export default Footer