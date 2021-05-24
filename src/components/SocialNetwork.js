import React from 'react'
import '../style/components/SocialNetwork.css'

const SocialNetwork = () => {

  return (
    <div className="social-network">
      <ul className="logo-socialNetwork">
        <a href="https://github.com/SRO-SarahRo" target="_blank" rel="noopener noreferrer" className="hover" class="fab fa-github">{null}</a>
        <a href="https://twitter.com/SarahroSro" target="_blank" rel="noopener noreferrer" className="hover" class="fab fa-twitter">{null}</a>
        <a href="https://www.linkedin.com/company/sarahro" target="_blank" rel="noopener noreferrer" className="hover" class="fab fa-linkedin">{null}</a>
      </ul>
    </div >
  )
}

export default SocialNetwork