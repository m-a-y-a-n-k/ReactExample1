import React, { Component } from "react";
import "../css/App.css";

export default class UserOutput extends Component {
  render() {
    return (
      <div className="output">
        <p>Hi, I am {this.props.userName}</p>
        <p>I am {this.props.age} years old</p>
      </div>
    );
  }
}
