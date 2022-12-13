import React from 'react';
import '../css/footer.css';

function Footer() {
  return (
    <div className='FooterContainer'>
      <div className='FooterSocialMedia'>
        <div className='FooterSocialMediaWrap'>
            <div className='FooterLogo'>
                {/* <img src='../assets/Images/Logo-modified.png' alt='' /> */}
            </div>
            <div className='FooterWebsiteRights'>
                Brunel Talent Marketplace  © 2021
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
