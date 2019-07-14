import React, { Component } from 'react';
import {
  Route,
  Link
} from 'react-router-dom'
import Home from '../home/Home'
import Login from '../login/Login'
import LoginRedirect from '../login/LoginRedirect'
import PrivateRoute from '../login/PrivateRoute'
import UnprotectedComponent from '../unprotectedComponent/UnprotectedComponent'
import { connect } from 'react-redux'
import { logoutUserAction } from '../login/actions/actions'

class Oauth2Home extends Component {

  render() {
    return (
      <div>

        <div>
          <Link to="/">NoahRoston.com</Link>
          <h1>Oauth2 Example</h1>
          <p>Oauth2 is (Open Authorization) is an open
            standard for token-based authentication and authorization on the
                Internet.</p>

          <p>This Oauth2 example allows a user to login with an Oauth2 authentication provider.
            Then access the protected route. Use the Test Authentication Provider for immediate access

                </p>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div>
              <span style={{margin:"0 20px"}}>
                <Link to="/oauth2">Protected Route</Link>
              </span>
              <span style={{margin:"0 20px"}}>
                <Link to="/oauth2/unprotected">Unprotected Route</Link>
              </span>
            </div>

            {this.props.authenticated && <span style={{margin:"0 20px"}}>
              
              <Link to="/oauth2" onClick={() => this.props.logoutUserAction()} >
            Logout
            </Link>
            </span>}
          </div>

          <PrivateRoute exact path={`${this.props.match.url}`} component={Home} />
          <Route path="/oauth2/login" component={Login} />
          <Route path="/oauth2/redirect/:oauth" component={LoginRedirect} />
          <Route path="/oauth2/unprotected" component={UnprotectedComponent} />
        </div>

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


export default connect(mapStateToProps, mapDispatchToProps)(Oauth2Home)