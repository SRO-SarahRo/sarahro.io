import React from 'react'
import '../style/pages/ComingSoon.css'
import logoComingSoon from '../assets/img/under_construction.svg'
import logoSarahRo from '../assets/img/SarahRo.png'
import SocialNetwork from '../components/SocialNetwork'

const ComingSoon = () => {
  return (
    <div className='page-comingSoon'>
      <div className='left-comingSoon'>
        <h1>Coming Soon!</h1>
        <h3>We are working hard to give you a better experience</h3>
        <img src={logoComingSoon} alt='' className='img-comingSoon' />
      </div>
      <div className='right-comingSoon'>
        <img src={logoSarahRo} alt='' className='logo-SarahRo' />
        <div className='subscribe'>
          <h3>Get Notified When We Go Live</h3>
          <div className='form-comingSoon'>
            <form action='#' >
              <input type='email' className='email' placeholder='Email Adress..' />
              <input type='submit' className='submit' value='Get Notified' />
            </form>
          </div>
        </div>
        <footer className='footer-comingSoon'>
          <SocialNetwork />
          <p>&copy;2021 by SarahRo | SRO</p>
        </footer>
      </div>
    </div>
  )
}

export default ComingSoon
