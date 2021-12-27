import React from "react";
import ColorCard from "./ColorCard";
import "./ColorCards.css";
function ColorCards({ cardList }) {
  return (
    <div className="grid-container">
      {cardList.map((card) => (
        <ColorCard key={card.id} card={card} />
      ))}
    </div>
  );
}

export default ColorCards;
