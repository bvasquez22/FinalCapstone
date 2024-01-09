import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <p>
        <span className="fab_name">FaB Master</span> is in no way affiliated
        with Legend Story Studios®.{" "}
        <a href="https://legendstory.com/" className="in_text_link">
          Legend Story Studios
        </a>
        ®,{" "}
        <a href="https://fabtcg.com/" className="in_text_link">
          Flesh and Blood
        </a>
        ™, and set names are trademarks of Legend Story Studios.<br/>
        Flesh and Blood characters, cards, logos, and art are property of Legend Story Studios.
      </p>
    </footer>
  );
};

export default Footer;
