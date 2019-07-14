
import React, { Component } from 'react';
import { Route, Redirect } from "react-router-dom";
import { connect } from 'react-redux'

class PrivateRoute extends Component {
         render() {
            let {
              component: Component,
              ...rest
            } = this.props;
        
            return (
              <Route
                {...rest}
                render={props => this.props.authenticated === true ? 
                  (<Component {...props} />):
                  (<Redirect
                        to={{
                          pathname: "/oauth2/login",
                          state: { from: props.location }
                        }}
                    />)
                }
              />
            );
          }
}

const mapStateToProps = state => {
    return {
      authenticated: state.login.authenticated,
      token: state.login.token
    }
  }

export default connect(mapStateToProps, null, null, { pure: false })(PrivateRoute)