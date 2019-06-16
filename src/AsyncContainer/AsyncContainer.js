import React, { Component } from 'react';
import App from '../App'
import { validateTokenFromSessionStorage } from '../login/actions/actions'
import { connect } from 'react-redux'
  

class AsyncContainer extends Component {

  constructor(props) {
    super()
    props.validateTokenFromSessionStorage()
  }

  render() {
    return (
      <div>
          { this.props.tokenChecked ? <App/>:<span>Loading...</span>}
      
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
