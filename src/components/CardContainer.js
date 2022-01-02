import React, { useState } from "react";
import Card from "./Card";
import "./CardContainer.css";

// Every time a message is submitted via CardForm.js, an instance of Card populates CardContainer.

const CardContainer = (props) => {
  // +1 Functionality
  const [plusOne, setPlusOne] = useState(0);

  return (
    <div className="container">
      <h2>Cards for {props.boardData.title}</h2>
      <Card plusOne={plusOne} setPlusOne={setPlusOne} />
    </div>
  );
};
export default CardContainer;
