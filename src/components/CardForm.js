import "./CardForm.css";

const CardForm = () => {
  return (
    <div className="container card-form pt-3">
      <h2>Create a Card</h2>
      <form>
        <div className="form-group">
          <label for="exampleFormControlTextarea1">Message:</label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="5"
          ></textarea>
        </div>
        <input type="submit" className="btn btn-primary" />
      </form>
    </div>
  );
};

export default CardForm;
