import React from 'react';
import './App.css';
import NavBar from "./nav"
import Button from '@material-ui/core/Button';
import pic from "./pic.jpg";
import Home from "./home";
import About from "./about";
import Projects from "./projects";
import Resume from "./resume";
import Contact from "./contact";
import LinkBar from "./nav2";

class App extends React.Component {
  state = {
    showHome: false,
    showAbout: false,
    showProjects: false,
    showResume: false,
    showContact: false
  }

  componentDidMount = () => {
    this.setState({ showHome: true });
  }

  handleHome = () => {
    this.setState({ showHome: true });
    this.setState({ showAbout: false });
    this.setState({ showProjects: false });
    this.setState({ showResume: false });
    this.setState({ showContact: false });
  }

  handleAbout = () => {
    this.setState({ showHome: false });
    this.setState({ showAbout: true });
    this.setState({ showProjects: false });
    this.setState({ showResume: false });
    this.setState({ showContact: false });
  }

  handleProjects = () => {
    this.setState({ showHome: false });
    this.setState({ showProjects: true });
    this.setState({ showAbout: false });
    this.setState({ showResume: false });
    this.setState({ showContact: false });
  }

  handleResume = () => {
    this.setState({ showHome: false });
    this.setState({ showResume: true });
    this.setState({ showAbout: false });
    this.setState({ showProjects: false });
    this.setState({ showContact: false });
  }

  handleContact = () => {
    this.setState({ showHome: false });
    this.setState({ showContact: true });
    this.setState({ showAbout: false });
    this.setState({ showProjects: false });
    this.setState({ showResume: false });
  }

  render() {
    let homeVisible = null;
    let aboutVisible = null;
    let projectsVisible = null;
    let resumeVisible = null;
    let contactVisible = null;
    if (this.state.showHome) {
      homeVisible = <Home />;
    }
    else if (this.state.showAbout) {
      aboutVisible = <About />;
    }
    else if (this.state.showProjects) {
      projectsVisible = <Projects />;
    }
    else if (this.state.showResume) {
      resumeVisible = <Resume />;
    }
    else if (this.state.showContact) {
      contactVisible = <Contact />;
    }
    return (
      <div className="App">
        <img src={pic} className="myImage" alt="myImage"/>
        <h2 className="text name-header">Siddharth Rajan</h2>
        <h3 className="text">Computer Engineering (B.E.), The Grove School of Engineering</h3>

        <NavBar clickHome={this.handleHome} clickAbout={this.handleAbout} clickProjects={this.handleProjects} clickResume={this.handleResume} clickContact={this.handleContact} />

        {homeVisible}
        {aboutVisible}
        {projectsVisible}
        {resumeVisible}
        {contactVisible}

        <br />
        <LinkBar />
      </div>
    );
  }
}

export default App;
