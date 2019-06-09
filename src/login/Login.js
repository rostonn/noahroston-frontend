import React, { Component } from 'react';

class Login extends Component {
    render() {
        const amazonUrl = process.env.REACT_APP_AMAZON_LOGIN_URL

        return (<div>
            <a href={amazonUrl}             
            id="LoginWithAmazon">
                <img border="0" alt="Login with Amazon"
                    src="https://images-na.ssl-images-amazon.com/images/G/01/lwa/btnLWA_gold_390x92.png"
                    width="390" height="92" />
            </a>
        </div>
        )
    }
}

export default Login;
