import React, { Component } from "react";
import logo from "./images/359.png";
import "./bootstrap.min.css";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import Launches from "./components/launches";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Launch from "./components/launch";

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql"
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Router>
          <div className="container">
            <img
              src={logo}
              style={{ width: 300, margin: "-50px auto 0", display: "block" }}
              alt="logo"
            />
            <Route exact path="/" component={Launches} />
            <Route exact path="/launches/:flight_number" component={Launch} />
          </div>
        </Router>
      </ApolloProvider>
    );
  }
}

export default App;
