import "./SelectBoard.css";


const SelectBoard = (props) => {
  // console.log(props.boardData);

  const boardList = props.boardData.map(board => {
    // console.log(board);
    return <option key={board.board_id} value={board.board_id}>{board.title}</option>
  });
  
  // showCards should be moved to App.js
  const showCards = (event) => {
    const axios = require('axios');
    axios.get(`https://backend-awesome-inspir-board.herokuapp.com/boards/${event.target.value}/allcards`)
      .then((response) => {
        console.log('response:', response);
        console.log('response data:', response.data);
        // props.onSelectTitleHandler(event.target.title);
      })
      .catch((error) => {
        console.log('error:', error);
        console.log('error response:', error.response);
      })
    // event.target.value is the id of the board
    // get request happens here for all cards for a given board
    // set event.target.value to the board id
  };
  
    return (
      <div className="container pt-3 select-board"> 
        <h2>Select a Board</h2>
        <select className="custom-select" size="6" onChange={showCards}>
        {boardList}
      </select>
    </div>
    );
  };

export default SelectBoard;

// https://getbootstrap.com/docs/4.5/components/forms/#custom-forms
