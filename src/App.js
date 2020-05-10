import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AppHeader from "./shared/AppHeader/AppHeader";
import Home from "./pages/Home/Home";
import "./App.css";

const Contact = lazy(() => import("./pages/Contact/Contact"));
const Market = lazy(() => import("./pages/Market/Market"));
const Blog = lazy(() => import("./pages/Blog/Blog"));
const SignIn = lazy(() => import("./pages/SignIn/SignIn"));

function App() {
  return (
    <div className="container">
      <Router>
        <AppHeader />
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/contact">
              <Contact />
            </Route>
            <Route exact path="/market">
              <Market />
            </Route>
            <Route exact path="/blog">
              <Blog />
            </Route>
            <Route exact path="/signin">
              <SignIn />
            </Route>
          </Switch>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
