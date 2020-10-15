import React from "react";

class LoginForm extends React.Component {
  state = {
    username: "",
    password: ""
  }
  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }
  handleSubmit = (evt) => {
    evt.preventDefault()
    if(this.state.username !== "" && this.state.password !== ""){
      this.props.handleLogin({...this.state})
      this.setState({
        username: "",
        password: ""
      })
    }
    else {
      console.log("both username and password fields need to have something on it!")
    }
    
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" onChange={this.handleChange} value={this.state.username}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" onChange={this.handleChange} value={this.state.password}/>
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
