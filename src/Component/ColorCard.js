import React from "react";

function ColorCard({ card }) {
  const style = {
    backgroundColor: card.color,
  };
  const divClickHandler = () => {
    console.log("clicked");
  };
  return (
    <div style={style} onClick={divClickHandler}>
      <h1>{card.name}</h1>
    </div>
  );
}

export default ColorCard;
