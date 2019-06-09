import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Home from './home/Home'
import Login from './login/Login'
import LoginRedirect from './login/LoginRedirect'
import PrivateRoute from './login/PrivateRoute'
import { connect } from 'react-redux'
  

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/login">login</Link></li>
            </ul>

            <hr />

            <PrivateRoute exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/redirect/:oauth" component={LoginRedirect} />
          </div>
        </Router>
      </div>
    );
  }
}


const mapStateToProps = state => {
    return {
      authenticated: state.login.authenticated,
      token: state.login.token
    }
  }

export default connect(mapStateToProps)(App)
// export default App;
