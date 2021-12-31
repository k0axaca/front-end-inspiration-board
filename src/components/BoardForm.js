import './BoardForm.css';
import { useState } from 'react';

const BoardForm = () => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAuthor, setEnteredAuthor] = useState('');
    const [showForm, setShowForm] = useState(false);

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    };

    const authorChangeHandler = (event) => {
        setEnteredAuthor(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const newBoard = {
            title: enteredTitle,
            author: enteredAuthor,
        };

        if (enteredTitle.trim().length === 0 || setEnteredAuthor.trim().length === 0) {
            return;
        }
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
                    <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Computer Science" value={enteredTitle} onChange={titleChangeHandler}/>
                </div>
                <div className="form-group">
                    <label for="formGroupExampleInput2">Author:</label>
                    <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Ada Lovelace" value={enteredAuthor} onChange={authorChangeHandler}/>
                </div>
            </form>
            <button type="submit" className="btn btn-primary">Submit</button>
            <button type="button" className="btn btn-secondary" onClick={() => setShowForm(false)}>Hide Board Form</button>
        </div>
    } else {
        return <button className="btn btn-primary" onClick={() => setShowForm(true)}>Show Board Form</button>
    }
};




export default BoardForm;