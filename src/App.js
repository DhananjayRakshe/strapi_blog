import "tailwindcss/dist/base.css";
import "styles/globalStyles.css";
import React from "react";
// import { css } from "styled-components/macro"; //eslint-disable-line

import BlogIndex from "pages/BlogIndex";
// import Blog from "Blog.js";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {


  return (
    <Router>
      <Switch>
        <Route path="/">
          <BlogIndex />
        </Route>
      </Switch>
    </Router>
  );
}
