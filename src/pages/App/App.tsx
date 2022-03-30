import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import "./App.scss";

const App = () => {
  return (
    <div>
      <NavBar />
      <main className="app-content">
        <h1>Hello World</h1>
        <p> bom dia - good morning - guten morgen - Bonjour</p>
      </main>
    </div>
  );
};

export default App;
