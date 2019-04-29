import React, { useEffect } from "react";
import { Provider } from "react-redux";
import store from "../store";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Invite from "./Invite";
import Going from "./Going";
import NotGoing from "./NotGoing";

const App = props => (
  <Provider store={store}>
    <Router>
      <div>
        <Route path="/" exact component={Invite} />
        <Route path="/going" component={Going} />
        <Route path="/notgoing" component={NotGoing} />
      </div>
    </Router>
  </Provider>
);

export default App;
