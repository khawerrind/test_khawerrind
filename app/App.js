import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';

import Home from "./components/Home";
import ContIn from "./components/ContIn";
import ContOut from "./components/ContOut";

const muiTheme = createMuiTheme({});

render(
  <MuiThemeProvider theme={muiTheme}>
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/contin" component={ContIn} />
        <Route path="/contout" component={ContOut} />
      </div>
    </Router>
  </MuiThemeProvider>,
  document.getElementById("root")
);
