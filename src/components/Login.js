import React from "react";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };

    this.stopProp = this.stopProp.bind(this);
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

  render() {
    return (
      <div onClick={this.stopProp} className="overlay">
        <div className="login-form">
          <p>Login form</p>
        </div>
      </div>
    );
  }
}

export default Login;
