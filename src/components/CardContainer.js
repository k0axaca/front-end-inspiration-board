import React, { useState } from "react";
import Card from "./Card";
import "./CardContainer.css";

// Every time a message is submitted via CardForm.js, an instance of Card populates CardContainer.

const CardContainer = (props) => {
  return (
    <div className="container">
      <h2>{props.board?.title} Cards</h2>
      {props.cardsByBoardId[props.board?.board_id]?.map((card) => {
        return (
          <React.Fragment key={card.id}>
            <Card
              increaseLikes={props.increaseLikes}
              card={card}
              deleteCard={props.deleteCard}
            />
          </React.Fragment>
        );
      })}
    </div>
  );
};
export default CardContainer;
