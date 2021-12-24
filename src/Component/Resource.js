import React, { useState, useEffect } from "react";
import ColorCards from "./ColorCards";
import axiosFetch from "../axios/axios-config";
function Resource() {
  const [isLoading, setIsLoading] = useState(true);
  const [cardList, setCardList] = useState(null);
  console.log("Loaded");
  useEffect(() => {
    axiosFetch
      .get("/unknown")
      .then((data) => {
        setCardList(data.data.data);
        setIsLoading(false);
        //console.log(data.data.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <React.Fragment>
      {isLoading && <h1>Loading</h1>}
      {!isLoading && <ColorCards cardList={cardList} />}
    </React.Fragment>
  );
}

export default Resource;
