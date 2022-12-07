import React, { useCallback, useEffect, useState } from "react";
import '../css/navbar.css';

function Navbar() {
    const [toggle, setToggle] = useState(false);
    const [active, setActive] = useState("home");
    const [scrollUp, setScrollUp] = useState(false);
   
    const handleNavToggle = () => {
      const state = toggle;
      setToggle(!state);
    };
   
    const handleNavItemClick = (item ) => {
      handleNavToggle();
      handleScroll(item);
    };
   
    const scroll = useCallback(() => {
      document.addEventListener("scroll", () => {
        const navArray = [
          "home",
          "about",
          "...",
          "...",
        ];
   
        if (window.pageYOffset > 300) {
          setScrollUp(true);
        } else setScrollUp(false);
   
        navArray.forEach(async (element) => {
   
          if (window.innerHeight < 500) setActive("home");
          if (window.innerHeight > (await getPos(element)))
   
  
            setActive(element);
        });
      });
    }, []);
   
    useEffect(() => {
      scroll();
    }, [scroll]);
   
    const getPos = async (id) => {
      const element = await document.getElementById(id);
      const elementPosition = element.getBoundingClientRect().bottom;
   
      return elementPosition;
    };
   
    const handleScroll = (id) => {
      const element = document.getElementById(id);
      const elementPosition = element.getBoundingClientRect().top;
      setActive(id);
   
      window.scrollBy({
        top: elementPosition - 60,
        behavior: "smooth"
      });
    };
  return (
    <div className='Nav'>
      <div className='NavbarContainer'>
        <div className='NavLogo'>
            <img className='NavImg' src='../assets/images/Logo.png'/>
            BTM
        </div>
        <div className='NavMenu'>
            
        </div>
      </div>
    </div>
  )
}

export default Navbar
