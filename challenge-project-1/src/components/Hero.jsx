import React, { useCallback, useEffect, useState } from 'react';
import {BsArrowDownCircleFill, BsArrowDownCircle} from 'react-icons/bs';


import '../css/hero.css';

import {Button} from './commonStructure/Button';

const Hero = () => {
  const [hover, setHover] = useState(false)

  const onHover = () => {
      setHover(!hover)

  }

  return (
    <div className='HeroContainer'>
      <div className='HeroBg'>
        <video className='VideoBg' autoPlay loop muted src='./assets/videos/video.mp4' type='video/mp4' />
      </div>
      <div className='HeroContent'>
        <h1>Welcome to the first BTM Challenge Project!</h1>
        <p>You will be learning how to code in javascript and css as well as be able to familirise yourselves with the react framework. This will massivelt help you in preparation for your second year group projects.</p>
        <div className='BtnWrapper'>
          <Button
            onMouseEnter={onHover} 
            onMouseLeave={onHover}
            BtnText='Get Started'
            BtnIcon={hover?<BsArrowDownCircleFill/>:<BsArrowDownCircle/>}
          />
        </div>

      </div>
    </div>
  )
}

export default Hero