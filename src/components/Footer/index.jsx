import React from 'react'
import { FaInstagram, FaTwitter, FaYoutube, FaGithub, FaTelegram, FaDiscord, FaMedium, FaLinkedin, FaFacebook, FaTwitch } from 'react-icons/fa'
import { FooterContainer, FooterWrap, SocialIconLink, SocialIcons, SocialMedia, SocialMediaWrap, WebsiteRights } from './FooterElements'

const Footer = () => {

  return (
    <FooterContainer>
      <FooterWrap>
        <SocialMedia>
          <SocialMediaWrap>
            <WebsiteRights>SarahRO - SRO © {new Date().getFullYear()} All rights reserved.</WebsiteRights>
            <SocialIcons>
              <SocialIconLink href='https://github.com/SRO-SarahRo' target='_blank' arial-label='Github'>
                <FaGithub />
              </SocialIconLink>
              <SocialIconLink href='https://twitter.com/Sarahro_Sro' target='_blank' arial-label='Twitter'>
                <FaTwitter />
              </SocialIconLink>
              <SocialIconLink href='https://medium.com/@sarahro_sro' target='_blank' arial-label='Medium'>
                <FaMedium />
              </SocialIconLink>
              <SocialIconLink href='https://t.me/sarahro0' target='_blank' arial-label='Telegram'>
                <FaTelegram />
              </SocialIconLink>
              <SocialIconLink href='' target='_blank' arial-label='Discord'>
                <FaDiscord />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  )
}

export default Footer
