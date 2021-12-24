import React from "react";
import ColorCard from "./ColorCard";
function ColorCards({ cardList }) {
  console.log(cardList);
  return (
    <div>
      {cardList.map((card) => (
        <ColorCard key={card.id} card={card} />
      ))}
      ]
    </div>
  );
}

export default ColorCards;
