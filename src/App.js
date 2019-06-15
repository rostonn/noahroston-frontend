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
import { logoutUserAction } from './login/actions/actions'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <header>
              <Link style={{ margin: "0 10px" }} to="/">Home</Link>
              { this.props.authenticated ? <Link style={{ margin: "0 10px" }} 
              to="/login" onClick={() => {this.props.logoutUserAction()}}>logout</Link> : <Link style={{ margin: "0 15px" }} to="/login">login</Link>

              }
              
            </header>

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


const mapDispatchToProps = {
  logoutUserAction
};


export default connect(mapStateToProps, mapDispatchToProps)(App)
// export default App;
