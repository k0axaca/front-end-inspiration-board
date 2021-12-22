import './App.css';
import React from 'react';
import SelectBoard from './components/SelectBoard';
import CardForm from './components/CardForm';
import BoardForm from './components/BoardForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Inspo Board</h1>
      </header>
      <main className='container-fluid input-container'>
        <SelectBoard />
        <BoardForm />
        <CardForm />
      </main>
    </div>
  );
}

export default App;


