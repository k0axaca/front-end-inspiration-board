import './CardForm.css';

const CardForm = () => {
    return (
        <div className="container card-form pt-3">
            <h2>Create a Card</h2>
            <form>
                <div className="form-group">
                <label for="exampleFormControlTextarea1">Message:</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
            </div>
            <button type="button" class="btn btn-primary">Submit</button>
            </form>
        </div>
    );
  }

export default CardForm;