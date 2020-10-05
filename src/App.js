import React from "react";
import Sidebar from "./Sidebar";
import "./App.css";
import Feed from "./Feed";
import Widgets from "./Widgets";
import Login from "./Login";
import { useStateValue } from "./Stateprovider";

function App() {
  const [{ user }, dispatch] = useStateValue();
  return (
    //BEM
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <>
          <Sidebar />
          <Feed />
          <Widgets />
        </>
      )}
    </div>
  );
}

export default App;
