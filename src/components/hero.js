import {React, useEffect, useState} from "react";
import '../styles/hero.css'

function Hero({globalSiteData}) {

  const [siteData, setSiteData] = useState({});

  useEffect(() => {
    if(globalSiteData) {
      setSiteData(globalSiteData);
    }
  }, [globalSiteData]);

  const pageLayout = siteData != null ? (
    <div className="hero hero__wrapper" style={{
      backgroundImage: `url(${siteData?.hero__banner__image})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      boxShadow: 'inset 0 0 0 2000px rgb(0 0 0 / 22%)'
    }} >
      <div> </div>
        <h1 className="hero__heading"> {siteData?.hero__banner__title} </h1>
        <p className="hero__sub-heading"> {siteData?.hero__banner__subtitle} </p>
        <a href="/homeowner" className="hero__button"> {siteData?.hero__banner__button__text} </a>
    </div>
  ) : null

  return pageLayout;
}

export default Hero;