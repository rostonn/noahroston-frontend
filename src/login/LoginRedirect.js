
import React, { Component } from 'react';
import { withRouter, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { HashLoader } from 'react-spinners';
import { css } from '@emotion/core';
import { loginUser } from './actions/actions'

const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
`;

class LoginRedirect extends Component {


  constructor(props) {
    super()
    let code = (props.location.search).split("&")[0].substring(6)
    props.loginUser(code, "amazon")
  }

  render() {
    return <div>
      <div style={{ marginTop: "100px" }}>
        <HashLoader
          css={override}
          sizeUnit={"px"}
          size={250}
          color={'#000000'}
        />
      </div>
      {(this.props.authenticated !== null && this.props.authenticated === false) &&
        <Redirect
          to={{
            pathname: "/oauth2/login",
            state: { from: this.props.location }
          }}
        />
      }
      {(this.props.authenticated !== null && this.props.authenticated === true) &&
        <Redirect
          to={{
            pathname: "/oauth2/",
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
