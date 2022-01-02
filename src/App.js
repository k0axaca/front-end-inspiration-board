import "./App.css";
import React, { useState } from "react";
import SelectBoard from "./components/SelectBoard";
import CardForm from "./components/CardForm";
import CardContainer from "./components/CardContainer";
import BoardForm from "./components/BoardForm";
import data from "./data.json";

function App() {
  const onSubmitBoardDataHandler = (enteredBoardData) => {
    console.log(enteredBoardData);
  };

  // SelectBoard.js State and Event Handlers (as they relate to Card Container)
  const [board, setBoard] = useState(data.boards[0]);

  const updateBoard = (event) => {
    // console.log(data.boards);
    // console.log(event.target.value);
    const modifiedBoard = data.boards.find((currentBoard) => {
      return currentBoard.id === parseInt(event.target.value);
    });

    // console.log(modifiedBoard);
    setBoard(modifiedBoard);
  };

  //   CardContainer.js State and Event Handlers
  const [cards, setCards] = useState([
    { card_id: 0, message: "hello world", likes: 0 },
    { card_id: 1, message: "goodnight moon", likes: 2 },
  ]);

  const increaseLikes = (card) => {
    console.log("hello lionel");
    const newCards = [...cards];
    const modifiedCard = cards.find(
      (currentCard) => currentCard.card_id === card.card_id
    );
    modifiedCard.likes += 1;
    setCards(newCards);
  };

  //   CardForm.js State and Event Handlers
  const [cardFormFields, setCardFormField] = useState({ message: "" });

  const addCardInstance = (newCard) => {
    const newCardsInfo = [...cards];
    const nextCardId = Math.random();

    // TO-DO: BACK-END CALL TO CREATE A CARD COMPONENT AND USE THE CARD_ID THAT THIS BACK-END RESPONSE RETURNS.

    newCardsInfo.push({
      card_id: nextCardId,
      message: newCard.message,
      likes: 0,
    });

    setCards(newCardsInfo);
  };

  const onCardChange = (event) => {
    setCardFormField({ ...cardFormFields, message: event.target.value });
  };

  const onCardFormSubmit = (event) => {
    event.preventDefault();
    console.log(cardFormFields.message);
    addCardInstance({
      message: cardFormFields.message,
    });
    setCardFormField({
      message: "",
    });
  };

  // Card.js Event Handlers
  const deleteCard = (card) => {
    let cardsDuplicate = [...cards];
    cardsDuplicate = cardsDuplicate.filter((cardToDelete) => {
      return cardToDelete.card_id !== card.card_id;
    });
    setCards(cardsDuplicate);
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1>Inspo Board</h1>
      </header>
      <main className="container-fluid input-container">
        <SelectBoard boardData={data.boards} onSelectBoard={updateBoard} />
        <BoardForm onSubmitBoard={onSubmitBoardDataHandler} />
        <CardForm
          value={cardFormFields}
          onCardChange={onCardChange}
          onSubmit={onCardFormSubmit}
        />
        <CardContainer
          board={board}
          cards={cards}
          increaseLikes={increaseLikes}
          deleteCard={deleteCard}
        />
      </main>
    </div>
  );
}

// create a componet to display all cards

export default App;
