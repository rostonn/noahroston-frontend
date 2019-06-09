
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

class Home extends Component {
    render() {
        return <h1>Hello, Home of {this.props.name}</h1>;
      }
}

const mapStateToProps = state => {
    return {
      name: state.home.name
    }
  }

export default withRouter(connect(mapStateToProps)(Home))
