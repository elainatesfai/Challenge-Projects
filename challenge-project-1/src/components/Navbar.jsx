import React, { useState } from 'react';
import { HiMenuAlt4 } from 'react-icons/hi';
import { RiCloseLine } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';
import '../css/navbar.css';

export default function Navbar() {

  // to navigate using navbar

  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate('/');
  };

  const navigateToTrafficLights = () => {
    navigate('/tls');
  };

  const navigateToQA = () => {
    navigate('/qa');
  };

  const navigateToTBL = () => {
    navigate('/tbl');
  };

  // to change burger classes
  const setBurgerClass = useState("BurgerBar unclicked")
  const setMenuClass = useState("DropdownMenu hidden")
  const [isMenuClicked, setIsMenuClicked] = useState(false)

  // toggle burger DropdownMenu change
  const updateMenu = () => {
    if(!isMenuClicked) {
      setBurgerClass('BurgerBar clicked')
      setMenuClass('DropdownMenu visible')
    }
    else {
      setBurgerClass('BurgerBar unclicked')
      setMenuClass('DropdownMenu hidden')
    }
  }

  return (
    <>
      <div className='Nav'>
        <div className='NavContainer'>
          
          <div className='Item' onClick={navigateToHome}>
                Home
            </div>
            <div className='Item' onClick={navigateToTrafficLights}>
                Traffic Light System
            </div>
            <div className='Item'>
            
            </div>
            <div className='Item' onClick={navigateToQA}>
                Live Q&A
            </div>
            <div className='Item' onClick={navigateToTBL}>
                Team-based Learning
            </div>
          </div>
          <div className='Logo' >
              <div className='LogoWrapper'>
                <img className='Img' src='../assets/Images/Logo-modified.png' alt='' />
              </div>
            </div>
            {/* <div className='MobileIcon' onClick={() => setIsMenuClicked(!isMenuClicked)}>
              {(isMenuClicked?<HiMenuAlt4/>:<RiCloseLine/>)}
            </div> */}

            <div className='MobileIcon' onClick={() => updateMenu(setIsMenuClicked(!isMenuClicked))}>
              {(isMenuClicked?<RiCloseLine/>:<HiMenuAlt4/>)}
            </div>
        </div>
        <div className={(isMenuClicked?'DropdownMenu':'DropdownMenuHidden')}>
          <div className='DropdownMenuList'>
            <div className='DropdownMenuItem' onClick={navigateToHome}>
              Home
            </div>
            <div className='DropdownMenuItem' onClick={navigateToTrafficLights}>
              Traffic Light System
            </div>
            <div className='DropdownMenuItem' onClick={navigateToQA}>
              Live Q&A
            </div>
            <div className='DropdownMenuItem' onClick={navigateToTBL}>
              Team-based Learning
            </div>
          </div>
        </div>
      </>
  )
}