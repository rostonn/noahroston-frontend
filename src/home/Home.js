
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

class Home extends Component {


  render() {
    return <div>
      <h1>Welcome to Noah Roston's personal website</h1>

      <h2>Projects</h2>

      <div>
        <article style={{width:"36em", margin:"0 auto"}}>
        <h3>NoahRoston.com </h3>
        <p>My personal website. Frontend written in React and Redux. Backend written in golang. Hosted in AWS using EC2 and Amazon Relational Database Service (RDS). Served with NGINX. Log users in with Oauth2
       <br/> Here is your JSON WEB TOKEN: <a rel="noopener noreferrer" target="_blank" href={"https://jwt.io?token=" + this.props.token}>jwt.io</a>
        </p>
        <a rel="noopener noreferrer" target="_blank" href="https://github.com/rostonn/noahroston-frontend">github.com/rostonn/noahroston-frontend</a>
        <br/>
        <a rel="noopener noreferrer" target="_blank" href="https://github.com/rostonn/noahroston-backend">github.com/rostonn/noahroston-backend</a>

        </article>
      </div>

      <div>
        <article style={{width:"36em", margin:"0 auto"}}>
        <h3>Angular Weather App </h3>
        <p>Frontend application written in Angular. Gets a user's city information and weather based on their 
          Geolocation. Hosted on AWS EC2 ubuntu machine. Served with NGINX</p>
        <a rel="noopener noreferrer" target="_blank" href="https://weather.noahroston.com">weather.noahroston.com</a>
        <br/>
        <a rel="noopener noreferrer" target="_blank" href="https://github.com/rostonn/Angular-Weather">github.com/rostonn/Angular-Weather</a>
        </article>
      </div>
      <div>
      <article style={{width:"36em", margin:"0 auto"}}>
        <h3>Angular Calculator App</h3>
        <p>Frontend application written in Angular. iPhone calculator clone. Keyboard input included! hosted on amazon served with NGINX</p>
        <a rel="noopener noreferrer" target="_blank" href="https://calculator.noahroston.com">calculator.noahroston.com</a>
        <br/>
        <a rel="noopener noreferrer" target="_blank" href="https://github.com/rostonn/Angular-iPhone-Calculator">github.com/rostonn/Angular-iPhone-Calculator</a>
        </article>
      </div>
      <div>
      <article style={{width:"36em", margin:"0 auto"}}>
        <h3>Raspberry Pi Ph Controller</h3>
       <a rel="noopener noreferrer" target="_blank" href="https://www.youtube.com/watch?v=xr8SYePmGxw">Raspberry Pi pH Controller youtube</a>
       </article>
      </div>
    </div>
  }
}

const mapStateToProps = state => {
  return {
    name: state.home.name,
    token: state.login.token
  }
}

export default withRouter(connect(mapStateToProps)(Home))
