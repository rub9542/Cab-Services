import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import BasicRouter from './Components/router';
import {BrowserRouter} from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <BasicRouter/>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
