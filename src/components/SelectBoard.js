import './SelectBoard.css';

const SelectBoard = (props) => {
  console.log(props.boardData);
    return (
      <div className="container pt-3 select-board"> 
        <h2>Select a Board</h2>
        <select className="custom-select" size="6">
        <option selected>{props.boardData[0]["title"]}</option>
        <option value="1">{props.boardData[1]["title"]}</option>
        <option value="2">{props.boardData[2]["title"]}</option>
        <option value="3">{props.boardData[3]["title"]}</option>
      </select>
    </div>
    );
  }

export default SelectBoard;

// https://getbootstrap.com/docs/4.5/components/forms/#custom-forms
