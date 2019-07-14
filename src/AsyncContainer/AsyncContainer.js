import React, { Component } from 'react';
import App from '../App'
import { validateTokenFromSessionStorage } from '../login/actions/actions'
import { connect } from 'react-redux'
import Oauth2Home from '../oauth2Home/Oauth2Home'

class AsyncContainer extends Component {

  constructor(props) {
    super(props)
    props.validateTokenFromSessionStorage()
  }

  render() {
    return (
      <div>
          { this.props.tokenChecked ? <Oauth2Home {...this.props} />:<span>Loading...</span>}
      </div>
    );
  }
}


const mapStateToProps = state => {
    return {
      tokenChecked: state.login.tokenChecked,
      token: state.login.token
    }
  }

  const mapDispatchToProps = {
    validateTokenFromSessionStorage
  };

export default connect(mapStateToProps, mapDispatchToProps)(AsyncContainer)
// export default App;
