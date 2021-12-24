import React, { useEffect, useState } from "react";
import ColorCards from "./Component/ColorCards";
import axiosFetch from "./axios/axios-config";
const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [cardList, setCardList] = useState(null);
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
};

export default App;
