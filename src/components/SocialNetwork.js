import React from 'react'
import '../style/components/SocialNetwork.css'

const SocialNetwork = () => {

  return (
    <div className="social-network">
      <ul className="logo-socialNetwork">
        <a href="https://github.com/SRO-SarahRo" target="_blank" rel="noopener noreferrer" className="hover" class="fab fa-github" />
        <a href="https://twitter.com/SarahroSro" target="_blank" rel="noopener noreferrer" className="hover" class="fab fa-twitter" />
        <a href="https://www.linkedin.com/company/sarahro" target="_blank" rel="noopener noreferrer" className="hover" class="fab fa-linkedin" />
      </ul>
    </div >
  )
}

export default SocialNetwork