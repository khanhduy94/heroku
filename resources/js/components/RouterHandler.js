import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Home/Home';
import PageHeader from './Layouts/PageHeader';


export default class extends React.Component {
  render() {
    return (
      <Router>
        <div>
        <PageHeader />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router >
    );
  }
}