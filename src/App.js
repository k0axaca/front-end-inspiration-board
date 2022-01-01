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
        console.log('response:', response);
        console.log('response data:', response.data);
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
      .catch((error) => {
        console.log('error:', error);
        console.log('error response:', error.response);
      })
      // finally always runs
      .finally(() => {
        console.log('finally done!');
      });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>{boardTitle}</h1>
      </header>
      <main className='container-fluid input-container'>
        <SelectBoard boardData={boardData}/>
        <CardForm />
        <BoardForm onSubmitBoard={onSubmitBoardDataHandler}/>
      </main>
    </div>
  );
}

// create a component to display all cards

export default App;


