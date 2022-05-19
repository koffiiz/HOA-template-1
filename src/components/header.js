import {React, useEffect, useState} from "react";
import '../styles/header.css'

function Header({globalSiteData}) {

  const [siteData, setSiteData] = useState({});

  useEffect(() => {
    if(globalSiteData) {
      setSiteData(globalSiteData);
    }
  }, [globalSiteData]);

  const pageLayout = siteData != null ? (
    <div className="header header__wrapper">
        <div className="header-logo__container"> <img src={siteData?.header__logo} alt='Site Logo' width='100px' height='auto'/> </div>
        <div className="header-nav__container"> 
          <ul>
            <li>{siteData?.header__nav__menu1}</li>
            <li>{siteData?.header__nav__menu2}</li>
            <li>{siteData?.header__nav__menu3}</li>
            <li>{siteData?.header__nav__menu4}</li>
            <li>{siteData?.header__nav__menu5}</li>
          </ul>
        </div>
        <div className="header-auth__container"> 
          <div className="auth-actions"> 
            <div> <a href={'/login'}> Login </a>  | <a href={'/register'}> Register </a> </div>
          </div>
          <div className="search-input"> <input type='text' className="input-control" placeholder="Search.."/> </div>
        </div>
    </div>
  ) : null

  return pageLayout;
}

export default Header;