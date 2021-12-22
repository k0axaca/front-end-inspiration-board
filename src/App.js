import './App.css';
import React from 'react';
import SelectBoard from './components/SelectBoard';
import CardForm from './components/CardForm';
import BoardForm from './components/BoardForm';
import data from './data.json';

function App() {

  console.log(data);
  return (
    <div className="App">
      <header className="App-header">
        <h1>Inspo Board</h1>
      </header>
      <main className='container-fluid input-container'>
        <SelectBoard boardData={data.boards}/>
        <CardForm />
        <BoardForm />
      </main>
    </div>
  );
}

export default App;


