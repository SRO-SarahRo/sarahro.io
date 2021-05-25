import React from 'react'
import '../style/components/SocialNetwork.css'

const SocialNetwork = () => {

  return (
    <div className="social-network">
      <ul className="logo-socialNetwork">
        <a href="https://github.com/SRO-SarahRo" target="_blank" rel="noopener noreferrer" className="hover" class="fab fa-github">{null}</a>
        <a href="https://t.me/sarahro0" target="_blank" rel="noopener noreferrer" className="hover" class="fab fa-telegram">{null}</a>
        <a href="https://discord.gg/HuQuaWVe" target="_blank" rel="noopener noreferrer" className="hover" class="fab fa-discord">{null}</a>
        <a href="https://twitter.com/Sarahro_Sro" target="_blank" rel="noopener noreferrer" className="hover" class="fab fa-twitter">{null}</a>
        <a href="https://medium.com/@sarahro_sro" target="_blank" rel="noopener noreferrer" className="hover" class="fab fa-medium">{null}</a>
        <a href="https://www.linkedin.com/company/sarahro" target="_blank" rel="noopener noreferrer" className="hover" class="fab fa-linkedin">{null}</a>
        <a href="https://www.facebook.com/SarahRo.SRO" target="_blank" rel="noopener noreferrer" className="hover" class="fab fa-facebook">{null}</a>
        <a href="https://www.instagram.com/sarahro_sro/" target="_blank" rel="noopener noreferrer" className="hover" class="fab fa-instagram">{null}</a>
        {/* <a href="https://www.tiktok.com/@sarahro_sro" target="_blank" rel="noopener noreferrer" className="hover" class="fab fa-tiktok">{null}</a> */}
        <a href="https://www.youtube.com/channel/UCSN2ylOtQZwPGmd80jaA0rg" target="_blank" rel="noopener noreferrer" className="hover" class="fab fa-youtube">{null}</a>
        <a href="https://www.twitch.tv/sarahro_sro/" target="_blank" rel="noopener noreferrer" className="hover" class="fab fa-twitch">{null}</a>
      </ul>
    </div >
  )
}

export default SocialNetwork

// TODO : Problème d'icone "fab fa-tiktok" / Fontawesome --> ça ne s'affichepas