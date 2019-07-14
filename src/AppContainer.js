import React, { Component } from 'react';
import App from './App'
import AsyncContainer from './AsyncContainer/AsyncContainer'
import {
    BrowserRouter as Router,
    Route
  } from 'react-router-dom'
import { connect } from 'react-redux'


class AppContainer extends Component {

    constructor(props) {
        super()
    }

    render() {
        return (
            <div>
                <Router>
                    <div>
                        {/* <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/login">login</Link></li>
                        </ul> */}


                        <Route path="/" exact component={App} />
                        <Route path="/oauth2" component={AsyncContainer} />
                    </div>
                </Router>

            </div>
        );
    }
}


const mapStateToProps = state => {
    return {
    }
}

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer)
// export default App;
