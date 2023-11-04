import React from 'react'
import {
  FooterWrapper,
  CopyrightText,
  SocialMediaWrapper,
  SocialMediaLink,
} from './FooterStyles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebook,
  faTwitter,
  faLinkedin,
  faGithub,
} from '@fortawesome/free-brands-svg-icons'

const FontAwesomeIconStyle = {
  fontSize: '1.5rem',
}

function Footer() {
  return (
    <FooterWrapper>
      <CopyrightText>
        &copy; 2023 NeNorvalls. All rights reserved.
      </CopyrightText>
      <SocialMediaWrapper>
        <SocialMediaLink
          href="https://facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faFacebook} style={FontAwesomeIconStyle} />
        </SocialMediaLink>
        <SocialMediaLink
          href="https://twitter.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faTwitter} style={FontAwesomeIconStyle} />
        </SocialMediaLink>
        <SocialMediaLink
          href="https://linkedin.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} style={FontAwesomeIconStyle} />
        </SocialMediaLink>
        <SocialMediaLink
          href="https://github.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} style={FontAwesomeIconStyle} />
        </SocialMediaLink>
      </SocialMediaWrapper>
    </FooterWrapper>
  )
}

export default Footer
