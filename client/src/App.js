import React, { useContext } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./components/navbar/Navbar"
import Footer from './components/footer/Footer.jsx';
import Home from "./pages/home/Home"
import SinglePost from "./pages/singlePost/Single";
import Write from "./pages/write/Write"
import Settings from './pages/settings/Settings';
import Login from './pages/login/Login';
import Signup from './pages/signin/Signup'
import { Context } from './context/Context';

function App() {
  const {user} = useContext(Context);
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Navbar />
          <Home />
          <Footer />
        </Route>
        <Route path="/posts">
          <Navbar />
          <Home />
          <Footer />
        </Route>
        <Route path="/signup">
          {user ? <><Navbar /><Home /><Footer /></> : <Signup />}
        </Route>
        <Route path="/login">
          {user ? <><Navbar /><Home /><Footer /></> : <Login />}
        </Route>
        <Route path="/post/:id">
          <Navbar />
          <SinglePost />
          <Footer />
        </Route>
        <Route path="/write">
          {user ? <><Navbar /><Write /><Footer /></> : <Login />}
        </Route>
        <Route path="/settings">
          {user ? <><Navbar /><Settings /><Footer /></> : <Login />}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
