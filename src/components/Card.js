import React from "react";
import "./Card.css";
// This is the actual card. Every time a message is submitted via CardForm, this will be generated.
const Card = (props) => {
  return (
    <div className="card w-75 pt-3">
      <section className="card-text">
        Message from CardForm.js goes here.
      </section>
      <a href="#">
        <button
          className="btn btn-primary"
          onClick={() => props.setPlusOne(props.plusOne + 1)}
        >
          +1
        </button>
      </a>
      <a href="#">
        <button className="btn btn-secondary">Delete</button>
      </a>
      <p>{props.plusOne} likes</p>
    </div>
  );
};

export default Card;
