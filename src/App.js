import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";

import Home from "./pages/Home";
import ButtonComponent from "./pages/ButtonComponent";
import GridComponent from "./pages/GridComponent";
import TypographyComponent from "./pages/TypographyComponent";
import ColorComponent from "./pages/ColorComponent";
import InputComponent from "./pages/InputComponent";

import "./App.scss";

function App() {
  return (
    <div className="app">
      <header className="app__header">
        <h1>
          <a href="/">
            <span className="primary">SF</span> design system
          </a>
        </h1>
      </header>

      <div className="app__container">
        <Router>
          <div className="app__leftNav">
            <NavLink to="/colors">Colors</NavLink>
            <NavLink to="/typography">Typography</NavLink>
            <NavLink to="/buttons">Buttons</NavLink>
            <NavLink to="/inputs">Inputs</NavLink>
            <NavLink to="/grid">Grid</NavLink>
          </div>
          <div className="app__main">
            <Switch>
              <Route path="/colors">
                <ColorComponent />
              </Route>
              <Route path="/typography">
                <TypographyComponent />
              </Route>
              <Route path="/buttons">
                <ButtonComponent />
              </Route>
              <Route path="/grid">
                <GridComponent />
              </Route>
              <Route path="/inputs">
                <InputComponent />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    </div>
  );
}

export default App;
