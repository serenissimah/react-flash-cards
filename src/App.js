import React, { Component, } from 'react';
import { Route, Switch, } from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar";
import { Container, } from "semantic-ui-react";
import Home from "./components/Home";
import About from "./components/About";
import NoMatch from "./components/NoMatch";

class App extends Component {

  render() {
    return (
      <>
        <Navbar />
        <Container>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route component={NoMatch} />
          </Switch>
        </Container> 
      </>
    );
  };
};

export default App;
