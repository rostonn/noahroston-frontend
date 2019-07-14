
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import ReactJson from 'react-json-view'


class Home extends Component {
  render() {
    return <div>
      <h3>Oauth2 Authenticated Home - You are authenticated! - Below is your JSON WEB TOKEN (jwt):</h3>
      <pre style={{ backgroundColor: "black" }}>
        <code style={{
          backgroundColor: "black", color: "rgb(253, 151, 31)",
          width: "60em", whiteSpace: "pre-wrap", wordWrap: "break-word"
        }}>
          {this.props.token}
        </code>
      </pre>

      <p>It looks like gibberish right? Inside thte JWT there is a Header, Body and Signature. It is base64 encoded of the form header.payload.signature</p>
      <h3>JWT Header</h3>
      <ReactJson src={this.props.tokenHeader} theme="monokai" />

      <h3>JWT Body</h3>
      <ReactJson src={this.props.tokenBody} theme="monokai" />

      <h3>Signature</h3>
      <pre style={{ backgroundColor: "black" }}>
        <code style={{
          backgroundColor: "black", color: "rgb(253, 151, 31)",
          width: "60em", whiteSpace: "pre-wrap", wordWrap: "break-word"
        }}>
          {this.props.token.split(".")[2]}
        </code>
      </pre>
    </div>
  }
}

const mapStateToProps = state => {
  return {
    name: state.home.name,
    token: state.login.token,
    tokenHeader: state.login.tokenHeader,
    tokenBody: state.login.tokenBody
  }
}

export default withRouter(connect(mapStateToProps)(Home))
