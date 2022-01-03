import './App.css';
import { useState, useEffect } from 'react';
import SelectBoard from './components/SelectBoard';
import CardForm from './components/CardForm';
import BoardForm from './components/BoardForm';
import axios from 'axios';

function App() {
  const [boardData, setBoardData] = useState([]);
  // currently unused, would like to set title dynamically depending on which board is selected
  const [boardTitle, setBoardTitle] = useState('Inspo Board');
  // get request happens here for all boards
  // useEffect to get all boards
  useEffect(() => {
    axios
    .get('https://backend-awesome-inspir-board.herokuapp.com/boards/allboards')
      .then((response) => {
        // console.log('response:', response);
        // console.log('response data:', response.data);
        setBoardData(response.data);
      })
      .catch((error) => {
        console.log('error:', error);
        console.log('error response:', error.response);
      })
  }, []);

  // make a copy of the existing state data and add new board
  // set that as new state data
  //  add that in the then statement

  const onSubmitBoardDataHandler = enteredBoardData => {
    console.log(enteredBoardData);
    const axios = require('axios');

    axios.post('https://backend-awesome-inspir-board.herokuapp.com/boards', enteredBoardData)
      .then((response) => {
        console.log('response:', response);
        console.log('response data:', response.data);
        setBoardData([...boardData, response.data]);
      })
      // how to string together 'then' statements? Not sure if this is correct
      .then(() => {
        console.log('boardData:', boardData);
      })
      .catch((error) => {
        console.log('error:', error);
        console.log('error response:', error.response);
      })
      // finally always runs
      .finally(() => {
        console.log('finally done!');
      });
  };

  //   CardContainer.js State and Event Handlers (cardsByBoardId: an object of arrays where the key is board_id)
  const [cardsByBoardId, setCardsByBoardId] = useState({
    1: [
      {
        card_id: 0,
        message: "hello world",
        likes: 0,
        cardFormError: "",
        cardFormValid: false,
      },
      {
        card_id: 1,
        message: "goodnight moon",
        likes: 2,
        cardFormError: "",
        cardFormValid: false,
      },
    ],
  });

  const increaseLikes = (card) => {
    const newCardsByBoardId = { ...cardsByBoardId };

    if (!cardsByBoardId[board.id]) {
      return;
    }

    const modifiedCard = cardsByBoardId[board.id].find(
      (currentCard) => currentCard.card_id === card.card_id
    );
    modifiedCard.likes += 1;
    setCardsByBoardId(newCardsByBoardId);
  };

  //   CardForm.js State and Event Handlers
  const [cardFormFields, setCardFormField] = useState({ message: "" });
  const [cardFormIsValid, setCardFormIsValid] = useState(true);

  const addCardInstance = (newCard) => {
    const newCardsByBoardId = { ...cardsByBoardId };
    const nextCardId = Math.random();

    // TO-DO: BACK-END CALL TO CREATE A CARD COMPONENT AND USE THE CARD_ID THAT THIS BACK-END RESPONSE RETURNS.
    if (!newCardsByBoardId[board.id]) {
      newCardsByBoardId[board.id] = [];
    }

    newCardsByBoardId[board.id].push({
      card_id: nextCardId,
      message: newCard.message,
      likes: 0,
    });

    setCardsByBoardId(newCardsByBoardId);
  };

  // onCardChange will ensure that the message is visible
  const onCardChange = (event) => {
    setCardFormField({ ...cardFormFields, message: event.target.value });
  };

  // onCardFormSubmit will ensure a new Card instance is created
  const onCardFormSubmit = (event) => {
    event.preventDefault();
    if (
      cardFormFields.message.length === 0 ||
      cardFormFields.message.length > 40
    ) {
      setCardFormIsValid(false);
      return;
    }

    addCardInstance({
      message: cardFormFields.message,
    });
    setCardFormField({
      message: "",
    });
    setCardFormIsValid(true);
  };

  // Card.js Event Handlers
  const deleteCard = (card) => {
    const cardsByBoardIdDuplicate = { ...cardsByBoardId };
    let filteredCardsByBoardId = cardsByBoardIdDuplicate[board.id].filter(
      (cardToDelete) => {
        return cardToDelete.card_id !== card.card_id;
      }
    );
    cardsByBoardIdDuplicate[board.id] = filteredCardsByBoardId;
    setCardsByBoardId(cardsByBoardIdDuplicate);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>{boardTitle}</h1>
      </header>
      <main className="container-fluid input-container">
        <SelectBoard boardData={data.boards} onSelectBoard={updateBoard} />
        <BoardForm onSubmitBoard={onSubmitBoardDataHandler} />
        {board ? (
          <>
            <CardForm
              value={cardFormFields}
              onCardChange={onCardChange}
              onSubmit={onCardFormSubmit}
              cardFormIsValid={cardFormIsValid}
            />
            <CardContainer
              board={board}
              cardsByBoardId={cardsByBoardId}
              increaseLikes={increaseLikes}
              deleteCard={deleteCard}
            />
          </>
        ) : undefined}
      </main>
    </div>
  );
}

export default App;
