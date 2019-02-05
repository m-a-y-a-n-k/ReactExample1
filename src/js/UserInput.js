import React, { Component } from "react";

export default class UserInput extends Component {
  render() {
    const inpStyles = {
      textAlign: "center",
      color: "white",
      backgroundColor: "#ff6666",
      width: "80%",
      margin: "auto",
      padding: "2%",
      border: "none",
      boxShadow: "rgb(244, 66, 66) 0px 3px 3px"
    };

    return (
      <div style={this.props.style}>
        <input
          style={inpStyles}
          type="text"
          onChange={this.props.changed}
          value={this.props.val}
        />
      </div>
    );
  }
}
