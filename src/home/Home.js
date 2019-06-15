
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
        <h3>Angular Weather App </h3>
        <p>Frontend application written in Angular. Gets a user's city information and weather based on their 
          Geolocation. Hosted on AWS EC2 ubuntu machine. Served with nginx</p>
        <a target="_blank" href="https://weather.noahroston.com">weather.noahroston.com</a>
        <br/>
        <a target="_blank" href="https://github.com/rostonn/Angular-Weather">https://github.com/rostonn/Angular-Weather</a>
        </article>
      </div>
      <div>
      <article style={{width:"36em", margin:"0 auto"}}>
        <h3>Angular Calculator App</h3>
        <p>Frontend application written in Angular. iPhone calculator clone. Keyboard input included! hosted on amazon served with nginx</p>
        <a target="_blank" href="https://calculator.noahroston.com">calculator.noahroston.com</a>
        <br/>
        <a target="_blank" href="https://github.com/rostonn/Angular-iPhone-Calculator">https://github.com/rostonn/Angular-iPhone-Calculator</a>
        </article>
      </div>
      <div>
      <article style={{width:"36em", margin:"0 auto"}}>
        <h3>Raspberry Pi Ph Controller</h3>
       <a target="_blank" href="https://www.youtube.com/watch?v=xr8SYePmGxw">Raspberry Pi pH Controller youtube</a>
       </article>
      </div>
    </div>
  }
}

const mapStateToProps = state => {
  return {
    name: state.home.name
  }
}

export default withRouter(connect(mapStateToProps)(Home))
