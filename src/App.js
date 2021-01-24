import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import './css/App.css';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Switch>
            <Route path="/login"><Login/></Route>
            <Route exact path="/"><Dashboard/></Route>
          </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
