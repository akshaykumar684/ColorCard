import React from "react";
import { useHistory } from "react-router-dom";

function ColorCard({ card }) {
  const history = useHistory();
  const style = {
    height: "200px",
    width: "200px",
    backgroundColor: card.color,
    "padding-top": "25px",
    "padding-left": "80px",
  };
  const divClickHandler = () => {
    history.push(`/Resource/${card.id}`);
  };
  return (
    <div style={style} onClick={divClickHandler}>
      <h1>{card.name}</h1>
    </div>
  );
}

export default ColorCard;
