import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";
import "./App.scss";

const App = () => {
  return (
    <>
      <NavBar />
      <main className="app-content">
        <Outlet />
      </main>
    </>
  );
};

export default App;
