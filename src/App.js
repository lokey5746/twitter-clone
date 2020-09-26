import React from "react";
import Sidebar from "./Sidebar";
import "./App.css";
import Feed from "./Feed";

function App() {
  return (
    //BEM
    <div className="app">
      <Sidebar />
      {/* Feed */}
      <Feed />
      {/* Widgets */}
    </div>
  );
}

export default App;
