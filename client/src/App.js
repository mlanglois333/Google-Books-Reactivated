import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "./pages/Search";
import View from "./pages/View";
import Header from "./components/Header";
import Footer from "./components/Footer";


function App() {
  return (
    <div>
    <Header />
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
    <Footer />
    </div>
  );
}

export default App;

