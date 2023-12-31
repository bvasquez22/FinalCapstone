import React from "react";
import { cards } from "fab-cards";

import "./Sets.css";

const Sets = () => {
  return (
    <div className="set_page">
      <div className="set_container">
        <h3 className="set_name">Current</h3>
        <img
          className="set_img"
          src="https://dhhim4ltzu1pj.cloudfront.net/media/images/bright_lights_logo_3TRCirLnKQgbe.width-10000.png"
          alt="Bright Lights Logo"
        />
      </div>
      <div className="set_container">
        <h3 className="set_name">Past</h3>
        <img
          className="set_img"
          src="https://dhhim4ltzu1pj.cloudfront.net/media/images/wtr_logo.width-10000.png"
          alt="Welcome to Rathe Logo"
        />
      </div>
      <div className="set_container">
        <h3 className="set_name ">Upcoming</h3>
        <img
          className="set_img"
          src="https://dhhim4ltzu1pj.cloudfront.net/media/images/heavy_hitters_logo.width-10000.png"
          alt="Heavy Hitters Logo"
        />
      </div>
    </div>
  );
};

export default Sets;
