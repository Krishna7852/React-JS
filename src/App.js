import React, { Component } from 'react';
import './App.scss';
import {HomeComponent} from "./home-index";
class App extends Component {
  render() {
      return <div className="App">
       <HomeComponent/>
      </div>;
  }
}

export default App;
