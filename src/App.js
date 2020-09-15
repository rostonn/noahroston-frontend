import React, { Component } from 'react';
import './App.css';
import {
  Link
} from 'react-router-dom'
import { connect } from 'react-redux'
import { logoutUserAction } from './login/actions/actions'
import { withStyles } from '@material-ui/styles';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
// import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import Paper from '@material-ui/core/Paper';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import { Link as ScrollLink, animateScroll as scroll, Element } from "react-scroll";




const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  card: {
    maxWidth: 475,
    margin: '0 auto'
  },
  paper: {
    minWidth: "600px",
    margin: "25px 75px", 
    padding: "20px"
  },
  media: {
    height: 370,
  },
  button: {
    margin: theme.spacing(1),
  },
  leftIcon: {
    marginRight: theme.spacing(1),
  },
  h3: { paddingTop: "5px", paddingLeft: "100px" },
});



class App extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false }
  }

  scrollToTop() {
    scroll.scrollToTop();
  }

  toggleDrawer = () => {
    this.setState({ open: !this.state.open });
  };

  closeDrawer = () => {
    if (this.state.open) {
      this.setState({ open: false })
    }
  }

  sideList = side => (
    <div
      className={this.props.classes.list}
      role="presentation"
      onClick={this.toggleDrawer}
    >
      <List>
        {['Projects', 'Technologies', 'Interests', 'Resume'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );


  render() {
    const { classes } = this.props;

    return (
      <div className="App" onClick={this.closeDrawer} >
        <AppBar color="primary" position="sticky">
          <Toolbar>
            {/* <IconButton onClick={this.toggleDrawer} edge="start" className={classes.menuButton} color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton> */}

            <div style={{ display: "flex", margin: "0 auto" }}>
              <ScrollLink
                to="top"
                spy={true}
                smooth={true}
                duration={500}
                style={{ margin: "0 25px", cursor: "pointer" }}
                onClick={this.scrollToTop}
              >
                <Typography variant="h6" color="inherit" align="center">
                  Top
              </Typography>
              </ScrollLink>

              <ScrollLink
                to="about"
                spy={true}
                smooth={true}
                duration={2000}
                style={{ margin: "0 25px", cursor: "pointer" }}
                offset={-75}
              >
                <Typography variant="h6" color="inherit" align="center">
                  About
              </Typography>
              </ScrollLink>


              <ScrollLink
                to="projects"
                spy={true}
                smooth={true}
                duration={500}
                style={{ margin: "0 25px", cursor: "pointer" }}
                offset={-75}
              >
                <Typography variant="h6" color="inherit" align="center">
                  Projects
              </Typography>
              </ScrollLink>
              <ScrollLink
                to="contact"
                spy={true}
                smooth={true}
                duration={500}
                style={{ margin: "0 25px", cursor: "pointer" }}

              >
                <Typography variant="h6" color="inherit" align="center">
                  Contact
              </Typography>
              </ScrollLink>

            </div>

          </Toolbar>
        </AppBar>

        {/* <Drawer open={this.state.open} >
          {this.sideList('left')}
        </Drawer> */}

        <div style={{ height: "700px", backgroundImage: `url(${process.env.PUBLIC_URL + '/cbm.jpg'})` }}>
          <div style={{ display: "flex", paddingTop: "25px" }}>
            <div style={{ display: "inline-block", flexGrow: "2", width: "10%", borderTop: "10px solid white", margin: "auto 5px" }}></div>
            <h1 style={{ fontFamily: "Lato", fontSize: "5rem", color: "white", marginBottom: "0px", marginTop: "0px" }}>NOAH ROSTON</h1>
            <div style={{ display: "inline-block", flexGrow: "2", width: "10%", borderTop: "10px solid white", margin: "auto 5px" }}></div>
          </div>

          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Typography color='secondary' align='left' variant="h3" component="h3" className={this.props.classes.h3}>
              Software Engineer</Typography>
          </div>
        </div>

        <Element name="about" style={{ marginTop: "25px", fontFamily: "Lato" }}>
        </Element>
        <Typography color='primary' align='left' variant="h3" component="h3" className={this.props.classes.h3}>
          About</Typography>
        <div>
          <Card className={classes.card}>
            <CardMedia
              className={classes.media}
              image={process.env.PUBLIC_URL + '/california.jpg'}
              title="Noah and Milena"
            />
            <CardContent>
              <Typography variant="body2" color="primary" component="p">
                I live in Georgia with my wife Milena and our dog Vail. I enjoy skiing, hiking, and camping.
                </Typography>
            </CardContent>
          </Card>
        </div>

        <Element name="projects" style={{ marginTop: "25px" }}>
          <Typography color='primary' align='left' variant="h3" component="h3" className={this.props.classes.h3}>
            Projects</Typography>

          <Paper className={this.props.classes.paper}>
            <article style={{ width: "36em", margin: "0 auto" }}>
              <Typography color='primary' align='center' component='h4' variant='h4'>
                NoahRoston.com Oauth2 Example</Typography>
              <p>Oauth2 app within personal website. Written in React and Redux. Backend written in Go. Hosted in AWS using EC2 and Amazon Relational Database Service (RDS). Served with NGINX.
              </p>
              </article>
              <Link to="/oauth2" rel="noopener noreferrer" style={{ textDecoration: 'none' }} target="_blank">
                <Button variant="contained" color="primary" className={classes.button}>
                  <span style={{height:"32px"}}></span>
                  <span style={{ marginLeft: "10px" }}>OAUTH2 Example</span>
                </Button>
              </Link>
              <a rel="noopener noreferrer" style={{ textDecoration: 'none' }} target="_blank" href="https://github.com/rostonn/noahroston-frontend">
                <Button variant="contained" color="primary" className={classes.button}>
                  <img alt="github" src={process.env.PUBLIC_URL + '/GitHub-Mark-Light-32px.png'} />
                  <span style={{ marginLeft: "10px" }}>frontend repo</span>
                </Button>
              </a>

              <a rel="noopener noreferrer" style={{ textDecoration: 'none' }} target="_blank" href="https://github.com/rostonn/noahroston_backend">
                <Button variant="contained" color="primary" className={classes.button}>
                  <img alt="github" src={process.env.PUBLIC_URL + '/GitHub-Mark-Light-32px.png'} />
                  <span style={{ marginLeft: "10px" }}>backend repo</span>
                </Button>
              </a>
            
          </Paper>

          <Paper className={this.props.classes.paper}>
            <article style={{ width: "36em", margin: "0 auto" }}>
              <Typography color='primary' align='center' component='h4' variant='h4'>
                Raspberry Pi Ph Controller
              </Typography>
              <p>NodeJS backend, Angular frontend. pH controller with relay, pump, and pH probe.</p>
            </article>
            <a rel="noopener noreferrer" target="_blank" href="https://www.youtube.com/watch?v=xr8SYePmGxw">
              <Button variant="contained" color="primary" className={classes.button}>
                <img alt="youtube" src={process.env.PUBLIC_URL + '/youtube_social_icon_white.png'}/>
                <span style={{ marginLeft: "10px" }}>Raspberry Pi pH Controller</span>
              </Button>
            </a>
          </Paper>

        </Element>
        <Element name="contact" style={{ marginTop: "25px" }}>
          <Typography color='primary' align='left' variant="h3" component="h3" className={this.props.classes.h3}>
            Contact
          </Typography>
          <Paper>
            <a rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/noahroston/">
              <Button variant="contained"  className={classes.button}>
                <img alt="linkedin" src={process.env.PUBLIC_URL + '/LI-In-Bug.png'}/>
                <span style={{ marginLeft: "10px" }}>Noah Roston</span>
              </Button>
            </a>
          </Paper>
        </Element>
      </div>
    );
  }
}


const mapStateToProps = state => {
  return {
    authenticated: state.login.authenticated,
    token: state.login.token
  }
}


const mapDispatchToProps = {
  logoutUserAction
};


export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(App))
// export default App;
