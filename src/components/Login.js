import React from "react";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };

    this.stopProp = this.stopProp.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
    this.changeHandler = this.changeHandler.bind(this);
  }

  stopProp(e) {
    e.stopPropagation();
    this.props.toggleModal();
  }

  changeHandler(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  submitHandler(e) {
    e.preventDefault();
    if (this.state.username.length > 10 && this.state.password.length > 3) {
      localStorage.setItem("loggedin", true);
      this.setState(
        {
          username: "",
          password: ""
        },
        this.props.toggleModal()
      );
    } else {
      alert("Please enter valid username and password");
    }
  }

  render() {
    return (
      <div>
        <div onClick={this.stopProp} className="overlay" />
        <div className="login-form">
          <h1>Log In</h1>
          <form className="inputs" onSubmit={this.submitHandler}>
            <label>
              Username:
              <input
                name="username"
                type="email"
                placeholder="Enter email"
                value={this.state.username}
                onChange={this.changeHandler}
              />
            </label>
            <label>
              Password:
              <input
                name="password"
                type="password"
                placeholder="Enter password"
                value={this.state.password}
                onChange={this.changeHandler}
              />
            </label>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
