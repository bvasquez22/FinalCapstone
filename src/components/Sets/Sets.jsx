import React from "react";
import { Link } from "react-router-dom";

import "./Sets.css";

const Sets = () => {
  return (
    <div className="set_page">
      <div className="current_and_upcoming_sets">
        <h2 className="set_name">Current</h2>
        <h2 className="set_name ">Upcoming</h2>
      </div>
      <div className="current_and_upcoming_sets">
        <div className="current_set">
          <Link to="/sets/bright-lights">
            <img
              className="set_img"
              src="https://dhhim4ltzu1pj.cloudfront.net/media/images/bright_lights_logo_3TRCirLnKQgbe.width-10000.png"
              alt="Bright Lights Logo"
            />
          </Link>
        </div>
        <div className="upcoming_set">
          <img
            className="set_img"
            src="https://dhhim4ltzu1pj.cloudfront.net/media/images/heavy_hitters_logo.width-10000.png"
            alt="Heavy Hitters Logo"
          />
        </div>
      </div>
      <div className="past_sets">
        <h2 className="set_name">Past</h2>
        <img
          className="set_img"
          src="https://dhhim4ltzu1pj.cloudfront.net/media/images/wtr_logo.width-10000.png"
          alt="Welcome to Rathe Logo"
        />
        <img
          className="set_img"
          src="https://dhhim4ltzu1pj.cloudfront.net/media/images/ARC.width-10000.png"
          alt="Arcane Rising Logo"
        />
        <img
          className="set_img"
          src="https://dhhim4ltzu1pj.cloudfront.net/media/images/cru_logo_stacked.width-10000.png"
          alt="Crucible of War Logo"
        />
        <img
          className="set_img"
          src="https://dhhim4ltzu1pj.cloudfront.net/media/images/0zIUv0bFVWaD.width-10000.png"
          alt="Monarch Logo"
        />
        <img
          className="set_img"
          src="https://dhhim4ltzu1pj.cloudfront.net/media/images/toa_logo.width-10000.png"
          alt="Tales of Aria Logo"
        />
        <img
          className="set_img"
          src="https://dhhim4ltzu1pj.cloudfront.net/media/images/1ubILjMFFi7Junh.width-10000.png"
          alt="Everfest Logo"
        />
        <img
          className="set_img"
          src="https://dhhim4ltzu1pj.cloudfront.net/media/images/KS40Q76S1e5DuPQ.width-10000.png"
          alt="Uprising Logo"
        />
        <img
          className="set_img"
          src="https://dhhim4ltzu1pj.cloudfront.net/media/images/dynasty_logo_RBG.width-10000.png"
          alt="Dynasty Logo"
        />
        <img
          className="set_img"
          src="https://dhhim4ltzu1pj.cloudfront.net/media/images/outsiders23012.width-10000.png"
          alt="Outsiders Logo"
        />
        <img
          className="set_img"
          src="https://dhhim4ltzu1pj.cloudfront.net/media/images/dusk_till_dawn_logo.width-10000.png"
          alt="Dusk till Dawn Logo"
        />
      </div>
    </div>
  );
};

export default Sets;
