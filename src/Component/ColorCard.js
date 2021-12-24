import React from "react";
import { useHistory } from "react-router-dom";

function ColorCard({ card }) {
  const history = useHistory();
  const style = {
    backgroundColor: card.color,
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
