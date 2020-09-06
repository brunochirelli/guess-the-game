import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Welcome from "./components/game/Welcome";
import Layout from "./components/layout/Layout";
import NotFound from "./components/layout/404";

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" render={Welcome} />
          <Route path="*" render={NotFound} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
