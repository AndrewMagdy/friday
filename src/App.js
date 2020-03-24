import React from "react";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
import initialState from "./store/initialState";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import CarMake from "./containers/CarMake.container";
import CarModel from "./containers/CarModel.container";

function App() {
  const store = configureStore(initialState);

  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/">
            <CarMake />
          </Route>
          <Route path="/models/:make">
            <CarModel />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
