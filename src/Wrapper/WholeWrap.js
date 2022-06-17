import React from "react";
import { NavigationDots, SocialMedia } from "../Components";

const WholeWrap = (Component, idName) =>
  function HOC() {
    return (
      <>
        <SocialMedia />
        <div className="app__wrapper app__flex">
          <Component />
          <div className="copyright">
            <p className="p-text">@2022 Nazmul</p>
            <p className="p-text">All rights reserved</p>
          </div>
        </div>
        <NavigationDots active={idName} />
      </>
    );
  };

export default WholeWrap;
