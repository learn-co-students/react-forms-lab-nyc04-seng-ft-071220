import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
    };
    // this.state = {}

    // this.handleInputChange = this.handleInputChange.bind(this);
    // this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    console.log(name);
    this.setState({
      [name]: value,
    });
  };

  login = event => {
    event.preventDefault();
    const { username, password } = this.state;

    if (!username || !password) return;
      this.props.handleLogin(username, password)
    // this.props.onSubmit({ username, password });
  };


  render() {
    return (
      <form onSubmit={this.login}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" value={this.state.username} onChange={this.handleInputChange}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" value={this.state.password} onChange={this.handleInputChange}/>
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
