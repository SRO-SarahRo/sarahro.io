import Video from '../../videos/video.mp4'
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper } from './HeroElements'

// Add import BtnLink from './HeroElements'

const Hero = () => {
  return (
    <HeroContainer id='home'>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
      </HeroBg>
      <HeroContent>
        <HeroH1>Virtual Cryptocurrency NFT Make Easy</HeroH1>
        <HeroP>WE ARE WORKING HARD TO GIVE YOU A BETTER EXPERIENCE</HeroP>
        <HeroBtnWrapper>
          {/* <BtnLink to='/notified'>Get Notified</BtnLink> */}
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  )
}

export default Hero
