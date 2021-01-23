import React from 'react';
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/home';
import createPoem from './components/createPoem';
import { ThemeProvider } from './store/ContextAPI'

function App() {
  return (
  <ThemeProvider>
<Router>
    <Switch>
        <Route exact path="/tworzewiersz" component={createPoem} />
        <Route exact path="/" component={Home} />
    </Switch>
</Router>
  </ThemeProvider>
  );
}

export default App;
