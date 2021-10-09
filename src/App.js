import React from "react";
import './App.css';
import TodApp from "./TodApp";


function App() {
  return (
    <div className="App">
      <header>
        <h1>TodApp</h1>
      </header>
      <div className="background">
        <main>
          <TodApp />
        </main>
      </div>
    </div>
  );
}

export default App;
