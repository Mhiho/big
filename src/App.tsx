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
        <Route path="/" component={Home} />
        <Route path="/tworzewiersz" component={createPoem} />
    </Switch>
</Router>
  </ThemeProvider>
  );
}

export default App;
