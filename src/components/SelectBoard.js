import './SelectBoard.css';

const SelectBoard = () => {
    return (
      <div className="container pt-3 select-board"> 
        <h2>Select a Board</h2>
        <select className="custom-select" size="6">
        <option selected>Travel</option>
        <option value="1">To-do</option>
        <option value="2">Affirmations</option>
        <option value="3">Books</option>
      </select>
    </div>
    );
  }

export default SelectBoard;

// https://getbootstrap.com/docs/4.5/components/forms/#custom-forms
