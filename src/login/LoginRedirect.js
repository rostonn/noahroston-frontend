
import React, { Component } from 'react';
import { withRouter, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { loginUser } from './actions/actions'

class LoginRedirect extends Component {

  constructor(props) {
    super()
    let code = (props.location.search).split("&")[0].substring(6)
    props.loginUser(code, "amazon")
  }

  render() {
    return <div>
      {(this.props.authenticated !== null && this.props.authenticated === false) &&
        <Redirect
          to={{
            pathname: "/login",
            state: { from: this.props.location }
          }}
        />
      }
      {(this.props.authenticated !== null && this.props.authenticated === true) &&
        <Redirect
          to={{
            pathname: "/",
            state: { from: this.props.location }
          }}
        />
      }
    </div>
  }
}

const mapStateToProps = state => {
  return {
    name: state.home.name,
    authenticated: state.login.authenticated,
    token: state.login.token,
    nextRedirect: state.login.nextRedirect
  }
}

const mapDispatchToProps = {
  loginUser
};
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginRedirect))
