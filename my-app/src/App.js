import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React, { Component } from 'react';
import './App.css';
import Login from './Login'
import MainContainer from './MainContainer';

class App extends Component {
  constructor() {
    super();

    this.state = {
      logged: false,
      username: '',
    }
  }
  login = (username) => {
    this.setState({
      username: username,
      logged: true,
    });
  }
  render() {
    console.log(this.state, ' this is state inside of app component');
    return (
      <div className="App">
        {this.state.logged ? <MainContainer /> : <Login login={this.login}/>}
      </div>
    );
  }
}

export default App;