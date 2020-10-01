import React from "react";

class Test2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Hello",
      surname: "User",
    };
  }
  onHandler = () => {
    this.setState({
      name: "Nilesh",
      surname: "hello",
    });
  };

  render() {
    return (
      <div>
        <p>{this.state.name}</p>
        <p>{this.state.surname}</p>
        <button onClick={this.onHandler}>click</button>
      </div>
    );
  }
}

export default Test2;
