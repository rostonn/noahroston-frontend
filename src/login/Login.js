import React, { Component } from 'react';
import { css } from '@emotion/core';
import { HashLoader } from 'react-spinners';

import { withRouter, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import GoogleLogin from 'react-google-login';
// import FacebookLogin from 'react-facebook-login';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import Button from '@material-ui/core/Button';

import { loginUser, showLoader, hideLoader } from './actions/actions'

const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
`;

class Login extends Component {

    render() {
        const amazonUrl = process.env.REACT_APP_AMAZON_LOGIN_URL

        const responseGoogle = (response) => {
            if(response.error) {
                this.props.hideLoader()
            }
            console.log(response)
            
            var id_token = response.tokenObj.id_token;
            this.props.loginUser(id_token, 'google')
        }

        const responseFacebook = (response) => {
            this.props.showLoader()
            this.props.loginUser(response.accessToken, "facebook")
        }

        const componentClicked = () => {
            this.props.showLoader()
        }

        const loginTestUser = () => {
            this.props.showLoader()
            this.props.loginUser("1", "test")
        }

        return (<div style={{margin:"25px auto", display:"flex"}}>
            {(this.props.authenticated !== null && this.props.authenticated === true) &&
                <Redirect
                    to={{
                        pathname: "/oauth2",
                        state: { from: this.props.location }
                    }}
                />
            }
            { !this.props.loading ? <div style={{margin:"0 auto"}}>

            <div style={{display:"flex", justifyContent:"center", margin:"5px 0"}}>

            <Button variant="contained" 
            color="primary"
            style={{display:"block", margin:"0 auto"}}
                onClick={loginTestUser}
            >Test User Login</Button>
            </div>

            <div style={{display:"flex", justifyContent:"center", margin:"5px 0"}}>
            <a href={amazonUrl}
                style={{height:"46px"}}
                id="LoginWithAmazon">
                <img border="0" alt="Login with Amazon"
                    src="https://images-na.ssl-images-amazon.com/images/G/01/lwa/btnLWA_gold_390x92.png"
                    width="195" height="46"/>
            </a>
            </div>

            <div style={{display:"flex", justifyContent:"center", margin:"5px 0"}} onClick={componentClicked}>

                <GoogleLogin
                    clientId="1017567250931-f8o9bs3qj6o5r7ina2imkao6vjc7617c.apps.googleusercontent.com"
                    buttonText="Sign In with Google"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    cookiePolicy={'single_host_origin'}
                    theme="dark"
                    
                />
            </div>

            <div style={{display:"flex", justifyContent:"center", margin:"5px 0"}} onClick={componentClicked}>
                <FacebookLogin
                    appId="830652277309841"
                    autoLoad={false}
                    fields="name,email,picture"
                    callback={responseFacebook}
                    onClick={componentClicked}
                    render={renderProps => {
                        return (
                            <div onClick={renderProps.onClick} className="fbOuterDiv">
                                <table className="fbTable" >
                                    <tbody>
                                        <tr className="fbTableRow">
                                            <td className="fbTableData">
                                                <div className="fbTableDiv">
                                                    <span className="spanClass">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 216 216" className="svgIcon" color="#FFFFFF"><path fill="#FFFFFF" d="
                                                        M204.1 0H11.9C5.3 0 0 5.3 0 11.9v192.2c0 6.6 5.3 11.9 11.9
                                                        11.9h103.5v-83.6H87.2V99.8h28.1v-24c0-27.9 17-43.1 41.9-43.1
                                                        11.9 0 22.2.9 25.2 1.3v29.2h-17.3c-13.5 0-16.2 6.4-16.2
                                                        15.9v20.8h32.3l-4.2 32.6h-28V216h55c6.6 0 11.9-5.3
                                                        11.9-11.9V11.9C216 5.3 210.7 0 204.1 0z"></path></svg>
                                                        <img className="imgClass" src="https://static.xx.fbcdn.net/rsrc.php/v3/yj/r/AHNFF9E2KeQ.png" alt="app-facebook" width="24" height="24"></img>
                                                    </span>
                                                </div>
                                            </td>
                                            <td className="fbLoginTd">
                                                <div className="fbLoginTdDiv">
                                                    <div className="fbLoginMessage">Continue with Facebook</div>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        )
                    }
                    }
                />
            </div>
        </div>:<div style={{width:"100%", marginTop:"25px", display:"flex", justifyContent:"center", alignItems:"center"}}>
        <HashLoader
                css={override}
                sizeUnit={"px"}
                size={200}
                color={'#000000'}
            />
            </div>}

            
        </div>
        )
    }
}

// loading={false}
// 

const mapStateToProps = state => {
    return {
        name: state.home.name,
        authenticated: state.login.authenticated,
        token: state.login.token,
        nextRedirect: state.login.nextRedirect,
        loading: state.login.loading
    }
}

const mapDispatchToProps = {
    loginUser,
    showLoader,
    hideLoader
};
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login))

