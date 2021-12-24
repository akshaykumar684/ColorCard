import React from "react";

function ColorCard({ card }) {
  const style = {
    backgroundColor: card.color,
  };
  return (
    <div style={style}>
      <h1>{card.name}</h1>
    </div>
  );
}

export default ColorCard;
