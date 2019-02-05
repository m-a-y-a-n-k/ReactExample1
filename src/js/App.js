import React, { Component } from "react";
import "../css/App.css";
import UserOutput from "./UserOutput";
import UserInput from "./UserInput";

class App extends Component {
  state = {
    users: {
      asdjhk: { id: "asdjhk", name: "Mayank", age: 21 },
      qweuio: { id: "qweuio", name: "Rohit", age: 31 },
      weuioi: { id: "weuioi", name: "Nikunj", age: 24 }
    }
  };

  userChangedHandler = (event, id) => {
    let userName = event.target.value;
    let user = { ...this.state.users[id] };
    user.name = userName;
    this.setState({
      users: {
        ...this.state.users,
        [id]: user
      }
    });
  };

  render() {
    const inpStyles = {
      textAlign: "center",
      color: "white",
      backgroundColor: "rgba(10,210,160,0.7)",
      margin: "auto",
      padding: "2%"
    };

    const cardStyle = {
      margin: "24px auto",
      width: "80%",
      boxShadow: "0 0 4px #3d5dbf "
    } 

    let outputs = Object.keys(this.state.users).map(key => {
      const user = this.state.users[key];
      return (
        <div style={cardStyle}>
          <UserInput
            style={inpStyles}
            changed={event => {
              this.userChangedHandler(event, user.id);
            }}
            val={user.name}
          />
          <UserOutput userName={user.name} age={user.age} />
        </div>
      );
    });

    return (
      <div className="App">
        {outputs}
      </div>
    );
  }
}

export default App;
