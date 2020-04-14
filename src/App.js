import React, { Component } from "react";
import "./App.css";
import { Route } from "react-router-dom";
import Header from "./components/Header";
import Request from "./components/Request";
import Homepage from "./components/Homepage";
import Login from "./components/Login";
import About from "./components/About";
import Contact from "./components/Contact";

class App extends Component {
  constructor() {
    super();
    this.state = {
      showModal: false
    };
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    this.setState(prevState => {
      return { showModal: !prevState.showModal };
    });
  }

  render() {
    return (
      <div className="App">
        <Route
          path="/"
          render={props => <Header {...props} toggleModal={this.toggleModal} />}
        />
        <Route
          exact
          path="/"
          render={props => (
            <Homepage
              {...props}
              toggleModal={this.toggleModal}
              showModal={this.state.showModal}
            />
          )}
        />
        <Route path="/request" component={Request} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        {this.state.showModal ? <Login toggleModal={this.toggleModal} /> : null}
      </div>
    );
  }
}

export default App;
