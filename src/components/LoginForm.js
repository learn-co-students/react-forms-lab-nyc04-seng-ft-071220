import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      password: "",
      username: "",
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (!this.state.username || !this.state.password) return

    this.props.handleLogin(this.state)
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input
              id="username"
              name="username"
              value={this.state.username}
              placeholder="username"
              onChange={this.handleChange}
              type="text"
            />
          </label>
        </div>
        <div>
          <label>
            Password
            <input
              value={this.state.password}
              onChange={this.handleChange}
              placeholder="password"
              id="password"
              name="password"
              type="password"
            />
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
