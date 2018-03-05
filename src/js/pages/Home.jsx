import React from "react";
import ReactModal from "react-modal"
import Textarea from "react-textarea-autosize";


export default class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
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
        this.handleCloseModal = this.handleCloseModal.bind(this);
    }
    onSuccessLogin() {
        //display username somewhere
        alert("login successful");
        this.setState({isLoggedIn: true})
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
    }

    handleCloseModal () {
        this.setState({ showModal: false });
        this.setState({username: "", password: ""});
        //insert backend code
    }

  render() {
    return (
      <div>
        <h1>
        	Home
        </h1>
          <button>{this.state.isLoggedIn.toString()}</button>
          <a className="btn -btn-default" onClick={this.handleOpenModal}>Login</a>
          <ReactModal
              style={{
                  overlay:{
                      left: "25%",
                      right: "25%",
                      top: "90px",
                      height: "600px",
                      width: "600px"
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
      </div>
    );
  }
}