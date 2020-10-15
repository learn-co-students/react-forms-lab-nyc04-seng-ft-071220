import React from "react";

class TwitterMessage extends React.Component {
  state = {
    chars: 0,
    message: ""
  }

  handleChange = (evt) => {
    let message = evt.target.value
    let currentChars = message.length
    if (currentChars<=this.props.maxChars)
    this.setState({
      message: message,
      chars: currentChars
    })
    
    
    
  }

  render() {
    let charNumber = this.props.maxChars - this.state.message.length;
    return (
      <div>
        <strong>Your message:</strong>
        <input onChange={this.handleChange}type="text" name="message" id="message" value={this.state.message}/>
        {/* <span>  {this.state.chars}/{this.props.maxChars}</span> */}
        <span>   {charNumber}</span>
      </div>
    );
  }
}

export default TwitterMessage;
