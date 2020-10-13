import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ""
    };
  }

  handleChange= (e) =>{
    const {name, value} = e.target
    this.setState({
      [name] : value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input 
        value={this.state.message} 
        type="text" 
        name="message" 
        id="message" 
        onChange={this.handleChange}/>
        <p>characters left: {this.props.maxChars - this.state.message.length}</p>
      </div>
    );
  }
}

export default TwitterMessage;
