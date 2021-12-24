import React, { useEffect, useState } from "react";
import axiosFetch from "../axios/axios-config";
import { useParams } from "react-router-dom";

function CardDetail() {
  const card = useParams();
  const [cardData, setCardData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    axiosFetch(`/unknown/${card.cardId}`)
      .then((data) => {
        setCardData(data.data.data);
        console.log(data.data.data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [card.cardId]);
  let details = <h1>Loading...</h1>;
  if (!isLoading) {
    const { name, year, pantone_value } = cardData;
    details = (
      <div>
        <h1>{name}</h1>
        <h1>{year}</h1>
        <h1>{pantone_value}</h1>
      </div>
    );
  }
  return <div>{details}</div>;
}

export default CardDetail;
