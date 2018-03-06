import React from "react";
import { IndexLink, Link } from "react-router";
import PropTypes from "prop-types";
import ReactModal from "react-modal"

export default class Nav extends React.Component {
  constructor() {
    super();
    this.state = {
      collapsed: true,
      showModal: false,
      showAlert: false,
      username: "",
      password: "",
      isLoggedIn: false
    };
    this.onSuccessLogin = this.onSuccessLogin.bind(this);
    this.onFailLogin = this.onFailLogin.bind(this);
    this.handleChangeUser = this.handleChangeUser.bind(this);
    this.handleChangePass = this.handleChangePass.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleOpenCheckModal = this.handleOpenCheckModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.handleCloseCheckModal = this.handleCloseCheckModal.bind(this);
    this.loginCheck = this.loginCheck.bind(this);
  }

  toggleCollapse() {
    const collapsed = !this.state.collapsed;
    this.setState({collapsed});
  }
  loginCheck() {
      this.toggleCollapse.bind(this);
      if (!this.state.isLoggedIn) {
          this.handleOpenCheckModal();
      } else {
          this.handleCloseCheckModal();
      }
  }
  onSuccessLogin() {
    //display username somewhere
    alert("login successful");
    this.setState({isLoggedIn: true});
    this.handleCloseModal();
    this.setState({username: "", password: ""});
  }

  onFailLogin() {
    alert("login failed, please try again");
  }

  handleChangeUser(event) {
    this.setState({username: event.target.value});
  }

  handleChangePass(event) {
    this.setState({password: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    if(this.state.username === "") {
        alert("Username Required")
    } else if(this.state.password === "") {
        alert("Password Required")
    } else {
        //insert backend call here
        //timeout waiting for callback
        this.onSuccessLogin();
        alert(this.state.username + this.state.password);
    }
  }
  handleOpenModal () {
    this.setState({ showModal: true });
    this.handleCloseCheckModal();
  }

  handleOpenCheckModal() {
      const test = this.props.location.pathname.toString();
      alert(test);
      if(test !== "/problems" && test !== "/settings") {
          this.handleCloseCheckModal();
      } else {
          this.setState({showAlert: true});
      }
  }

  handleCloseModal () {
    this.setState({ showModal: false });
    alert(this.state.isLoggedIn.toString());
    alert(this.props.location.pathname.toString());
    if(this.props.location.pathname === ("/problems" || "/settings")) {
        if (!this.state.isLoggedIn) {
            this.handleOpenCheckModal();
        }
    }
    this.setState({username: "", password: ""});
  }

  handleCloseCheckModal () {
      this.setState( {showAlert: false});
  }

  render() {
    const { location } = this.props;
    const { collapsed } = this.state;
    const featuredClass = location.pathname === "/" ? "active" : "";
    const helpClass = location.pathname.match(/^\/help/) ? "active" : "";
    const problemsClass = location.pathname.match(/^\/problems/) ? "active" : "";
    const settingsClass = location.pathname.match(/^\/settings/) ? "active" : "";
    const navClass = collapsed ? "collapse" : "";

    return (
      <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" onClick={this.toggleCollapse.bind(this)} >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
          </div>
          <div className={"navbar-collapse " + navClass} id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              <li className={featuredClass}>
                <IndexLink to={{pathname: "/", state:{login: this.state.isLoggedIn}}} onClick={this.loginCheck}>Home</IndexLink>
              </li>
              <li className={problemsClass}>
                <Link to={{pathname: "problems", state:{login: this.state.isLoggedIn}}} onClick={this.loginCheck}>Problems</Link>
              </li>
              <li className={settingsClass}>
                <Link to={{pathname: "settings", state:{login: this.state.isLoggedIn}}} onClick={this.loginCheck}>Settings</Link>
              </li>
              <li className={helpClass}>
                <Link to="help" onClick={this.loginCheck}>Help</Link>
              </li>
            </ul>
            <a className="btn -btn-default" onClick={this.handleOpenModal}>Login</a>
          </div>
          <div>
            <ReactModal
                style={{
                    overlay:{
                        left: "0%",
                        right: "25%",
                        top: "90px",
                        height: "600px",
                        width: "1200px"
                    }
                }}
                isOpen={this.state.showModal}
                contentLabel="Minimal Modal Example">
                <button onClick={this.handleCloseModal}>&#9587;</button>
                <h1>Login</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Username: <input type="text" onChange={this.handleChangeUser}/>
                    </label>
                    <label>
                        Password: <input type="password" onChange={this.handleChangePass}/>
                    </label>
                </form>
                <a className="btn -btn-action" onClick={this.handleSubmit}>Submit</a>
                <a className="btn -btn-action" >Create New Account?</a>
            </ReactModal>
          <ReactModal
              style={{
                  overlay:{
                      left: "0%",
                      right: "25%",
                      top: "90px",
                      height: "600px",
                      width: "1200px"
                  }
              }}
              isOpen={this.state.showAlert}
              contentLabel="Minimal Modal Example">
              <h1>Login plz</h1>
          </ReactModal>
          </div>
        </div>
      </nav>
    );
  }
}


Nav.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }),
};

Nav.defaultProps = {
  location: {
    pathname: "",
  },
};
