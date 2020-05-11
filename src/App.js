import React from "react";
import { Switch, Route } from "react-router-dom";

import Nav from "Components/Nav";
import Container from "Components/Container";
import Footer from "Components/Footer";
import Top from "Pages/Top";

import Home from "Pages/Home";
import Papers from "Pages/Papers"

import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.App}>
      <Top />
      <Nav />
      <Container>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/papers">
            <Papers />
          </Route>
        </Switch>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
