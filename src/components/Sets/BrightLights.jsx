import React from "react";
import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

import "./Sets.css";

const supabase = createClient(
  "https://wzlwwddccbinbqtsjojp.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind6bHd3ZGRjY2JpbmJxdHNqb2pwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQ1NjQzMzQsImV4cCI6MjAyMDE0MDMzNH0.yH8KmXr7vwWXM-O6QSAGS6jFeP482dn5piYPBTE9kI0"
);

const BrightLights = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    getCards();
  }, []);

  const getCards = async () => {
    const { data } = await supabase
      .from("card_table")
      .select()
      .order("card_id");
    setCards(data);
  };

  return (
    <div className="set_page">
      <img
        className="set_img_header"
        src="https://dhhim4ltzu1pj.cloudfront.net/media/images/bright_lights_logo_3TRCirLnKQgbe.width-10000.png"
        alt="Bright Lights Logo"
      />
      <div className="card_list">
        {cards.map((card) => (
          <div>
            <div className="foil_type_header">
              <h4 className={card.foiling.replace(/ /g, "_")}>
                {card.foiling}
              </h4>
              {card.extended_art && (
                <h4 className="extended_art">Extended Art</h4>
              )}
            </div>
            <img
              key={card.printing_identifier}
              src={card.img_src}
              className="card_img"
              alt={`${card.foiling} ${card.set_identifier}`}
            />
            <div className="set_id_footer">
              <h3>{card.set_identifier}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrightLights;
