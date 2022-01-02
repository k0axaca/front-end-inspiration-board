import React, { useState } from "react";
import Card from "./Card";
import "./CardContainer.css";

// Every time a message is submitted via CardForm.js, an instance of Card populates CardContainer.

const CardContainer = (props) => {
  console.log(props.cardsByBoardId);
  console.log(props.board.id);
  return (
    <div className="container">
      <h2>Cards for {props.board.title}</h2>
      {props.cardsByBoardId[props.board.id]?.map((card) => {
        return (
          <Card
            key={card.id}
            increaseLikes={props.increaseLikes}
            card={card}
            deleteCard={props.deleteCard}
          />
        );
      })}
    </div>
  );
};
export default CardContainer;
