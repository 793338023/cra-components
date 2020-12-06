import React from 'react';
import { HashRouter as Router, Route } from "react-router-dom";
import Home from "./pages/home";

function App() { 
  console.log(process.env)
  return (
    <div className="App">
      <Router>
        <Route component={Home} path="/a/:id" />
      </Router>
    </div>
  );
}

export default App;
