import './BoardForm.css';

const BoardForm = () => {
    return (
        <div className="conatiner board-form pt-3">
            <h2>Create a Board</h2>
            <form>
                <div class="form-group">
                    <label for="formGroupExampleInput">Title:</label>
                    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Computer Science" />
                </div>
                <div class="form-group">
                    <label for="formGroupExampleInput2">Author:</label>
                    <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Ada Lovelace" />
                </div>
            </form>
            <button type="button" class="btn btn-primary">Submit</button>
        </div>
    );
}

export default BoardForm;