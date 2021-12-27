import React, { useEffect, useState } from "react";
import axiosFetch from "../axios/axios-config";
import { useParams } from "react-router-dom";
import "./CardDetails.css";
function CardDetail() {
  const card = useParams();
  const [cardData, setCardData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    axiosFetch(`/unknown/${card.cardId}`)
      .then((data) => {
        setCardData(data.data.data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [card.cardId]);

  let style = {
    backgroundColor: "red",
  };

  let details = <h1>Loading...</h1>;
  if (!isLoading) {
    const { name, year, pantone_value, color } = cardData;
    style = {
      backgroundColor: color,
    };
    details = (
      <div className="cardDetail" style={style}>
        <h1>{name}</h1>
        <h1>{year}</h1>
        <div>
          <h6>Pantone Value</h6>
          <h1>{pantone_value}</h1>
        </div>
      </div>
    );
  }
  return details;
}

export default CardDetail;
