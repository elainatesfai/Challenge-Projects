import React, { useState } from 'react';
import { HiMenuAlt4 } from 'react-icons/hi';
import { RiCloseLine } from 'react-icons/ri';
import '../css/navbar.css';

export default function Navbar() {

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
          
          <div className='Item'>
                Home
            </div>
            <div className='Item'>
                Traffic Light System
            </div>
            <div className='Item'>
            
            </div>
            <div className='Item'>
                Live Q&A
            </div>
            <div className='Item'>
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
            <div className='DropdownMenuItem'>
              Home
            </div>
            <div className='DropdownMenuItem'>
              Traffic Light System
            </div>
            <div className='DropdownMenuItem'>
              Live Q&A
            </div>
            <div className='DropdownMenuItem'>
              Team-based Learning
            </div>
          </div>
        </div>
      </>
  )
}