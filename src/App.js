import "./App.css";
import React, { useState } from "react";
import SelectBoard from "./components/SelectBoard";
import CardForm from "./components/CardForm";
import CardContainer from "./components/CardContainer";
import BoardForm from "./components/BoardForm";
import data from "./data.json";
import Card from "./components/Card";

function App() {
  const onSubmitBoardDataHandler = (enteredBoardData) => {
    console.log(enteredBoardData);
  };

  console.log(data);
  return (
    <div className="App">
      <header className="App-header">
        <h1>Inspo Board</h1>
      </header>
      <main className="container-fluid input-container">
        <SelectBoard boardData={data.boards} />
        <BoardForm onSubmitBoard={onSubmitBoardDataHandler} />
        <CardForm />

        <CardContainer boardData={data.boards} />
      </main>
    </div>
  );
}

// create a componet to display all cards

export default App;
