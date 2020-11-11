import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "./pages/Search";
import View from "./pages/View";


function App() {
  return (
    <Router>
      <div>
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

