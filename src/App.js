import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

//pages
import Content from "./pages/Content";

function App() {
  return (
    <div className="">
      <Router>
        <Route path="/" exact>
          <p> Homepage </p>
        </Route>
        <Route path="/login" render={() => <Content />} />
        <Route path="/signup" render={() => <Content />} />
        <Route path="/content" render={() => <Content />} />
        <Route path="/myaccount" render={() => <Content />} />
      </Router>
    </div>
  );
}

export default App;
