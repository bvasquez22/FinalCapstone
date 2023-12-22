import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <p>
        <span className="fab_name">FaB Manager</span> is in no way affiliated
        with <a href="https://legendstory.com/" className="in_text_link">Legend Story Studios</a>®.{" "}
        <a href="https://fabtcg.com/" className="in_text_link">Flesh and Blood</a>™ is a registered
        trademark of Legend Story Studios. Flesh and Blood™ and all associated
        images are property of Legend Story Studios. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
