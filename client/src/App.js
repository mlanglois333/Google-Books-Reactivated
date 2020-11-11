import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "./pages/Search";
import View from "./pages/View";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path={["/", "/books"]}>
            <Search />
          </Route>
          <Route exact path="/view">
            <View />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

