import React from 'react'
import { FooterContainer, FooterWrap, SocialMedia, SocialMediaWrap, WebsiteRights } from './FooterElements'

// Add FaDiscord, FaMedium from 'react-icons/fa'

const Footer = () => {

  return (
    <FooterContainer>
      <FooterWrap>
        <SocialMedia>
          <SocialMediaWrap>
            <WebsiteRights>SarahRO - SRO © {new Date().getFullYear()} All rights reserved.</WebsiteRights>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  )
}

export default Footer
