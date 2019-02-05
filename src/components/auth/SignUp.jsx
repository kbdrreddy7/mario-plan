import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { signUp } from "./../../store/actions/authActions";
class SignUp extends Component {
  state = {
    email: "",
    password: "",
    fName: "",
    lName: ""
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.signUp(this.state);
  };
  handleChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };
  render() {
    const { auth, authError } = this.props;
    if (auth.uid) return <Redirect to="/" />;

    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="gray-text text-darken-3">SignIn</h5>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="fName">First Name</label>
            <input type="text" id="fName" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="lName">Last Name</label>
            <input type="text" id="lName" onChange={this.handleChange} />
          </div>

          <div className="input-field">
            <button className="pink lighten-1 z-depth-0">SignUp</button>
            <div className="red-text center">
              {authError ? <p>{authError}</p> : null}
            </div>
          </div>
        </form>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signUp: newUser => dispatch(signUp(newUser))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUp);
