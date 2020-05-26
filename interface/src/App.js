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

// WEBPARTS
import { Home, Direction } from './Pages'

import './App.scss'


const App = () => {
  const socket = openSocket('http://localhost:8080');

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home socket={socket} />
        </Route>
        <Route exact path="/direction">
          <Direction socket={socket} />
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
