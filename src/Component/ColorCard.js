import React from "react";
import { useHistory } from "react-router-dom";
import "./ColorCard.css";
function ColorCard({ card }) {
  const history = useHistory();
  const style = {
    backgroundColor: card.color,
  };
  const divClickHandler = () => {
    history.push(`/Resource/${card.id}`);
  };
  const { name, year } = card;
  return (
    <div className="colorCard" style={style} onClick={divClickHandler}>
      <h1>{name}</h1>
      <h2>{year}</h2>
    </div>
  );
}

export default ColorCard;
