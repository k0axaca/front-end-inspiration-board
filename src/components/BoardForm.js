import './BoardForm.css';
import { useState } from 'react';

const BoardForm = props => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAuthor, setEnteredAuthor] = useState('');
    const [showForm, setShowForm] = useState(true);

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    };

    const authorChangeHandler = (event) => {
        setEnteredAuthor(event.target.value);
    };

    const submitHandler = event => {
        event.preventDefault();

        console.log(enteredTitle, enteredAuthor);

        const newBoard = {
            title: enteredTitle,
            author: enteredAuthor,
        };

        if (enteredTitle.trim().length === 0 || enteredAuthor.trim().length === 0) {
            return;
        }

        props.onSubmitBoard(newBoard);
        setEnteredTitle('');
        setEnteredAuthor('');
        setShowForm(false);
    };

    if (showForm) {
        return <div className="container board-form pt-3">
            <h2>Create a Board</h2>
            <form onSubmit={submitHandler}>
                <div className="form-group">
                    <label for="formGroupExampleInput">Title:</label>
                    <input type="text" className="form-control" placeholder="Computer Science" value={enteredTitle} onChange={titleChangeHandler}/>
                </div>
                <div className="form-group">
                    <label for="formGroupExampleInput2">Author:</label>
                    <input type="text" className="form-control" placeholder="Ada Lovelace" value={enteredAuthor} onChange={authorChangeHandler}/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
                <button type="button" className="btn btn-secondary" onClick={() => setShowForm(false)}>Hide Board Form</button>
            </form>
        </div>
    } else {
        return <button className="btn btn-primary" onClick={() => setShowForm(true)}>Show Board Form</button>
    }
};




export default BoardForm;