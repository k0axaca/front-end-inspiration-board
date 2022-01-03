import React from "react";
import "./Card.css";

// This is the actual card. Every time a message is submitted via CardForm, this will be generated.
const Card = (props) => {
  return (
    <div className="card w-75 pt-3">
      <section className="card-text">{props.card.message}</section>
      <a href="#">
        <button
          className="btn btn-primary"
          onClick={() => props.increaseLikes(props.card)}
        >
          +1
        </button>
      </a>
      <a href="#">
        <button
          className="btn btn-secondary"
          onClick={() => props.deleteCard(props.card)}
        >
          Delete
        </button>
      </a>
      <p>{props.card.likes} likes</p>
    </div>
  );
};

export default Card;
