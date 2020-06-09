import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import openSocket from 'socket.io-client';

// FONT AWESOME
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

import { Home, Direction } from './Pages'
import { Header } from './Components'

import './App.scss'


const App = () => {
  const socket = openSocket(`http://${window.location.hostname}:8080`);

  return (
    <div className="app">
      <Router>
        <Header />

        <Switch>
          <Route exact path="/">
            <Home socket={socket} />
          </Route>
          <Route exact path="/direction">
            <Direction socket={socket} />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App;
