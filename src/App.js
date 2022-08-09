import React from 'react';
import Header from './Header';
import Footer from './Footer';
import BestBooks from './BestBooks';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Profile from './profile';
import { withAuth0 } from '@auth0/auth0-react';
import Welcome from './welcome';
import About from './About'



class App extends React.Component {
  render() {
    const { isAuthenticated } = this.props.auth0;
    return (
      <>
        <Router>
          <Header />
          <Routes>
            {isAuthenticated && <Route
              exact path="/"
              element={<BestBooks />}
            >
            </Route>}
            {!isAuthenticated && <Route
              exact path="/"
              element={<Welcome />}
            >
            </Route>}
            <Route
              exact path="/profile"
              element={<Profile />}
            >
            </Route>
            <Route
              exact path="/about"
              element={<About />}
            >
            </Route>

          </Routes>
          <Footer />
        </Router>
      </>
    )
  }
}

export default withAuth0(App);