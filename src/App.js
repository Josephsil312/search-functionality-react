import React from "react";
import "./App.css";
import SearchBar from "./SearchBar";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import Reference from "./Referencenum";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" component={SearchBar} exact />

          <Route path="/:id" component={Reference} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
