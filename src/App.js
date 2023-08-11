import React, { Component } from "react";
import NameTagList from "./NameTagList.js";
import UserInput from "./UserInput.js";

class App extends Component {
  state = {
    names: ["Erin", "Ann", "Nichole", "Sharon", "Maryn"]
  };
  removeName = (clickedIndex) => {
    // to learn how the .filter method works, check out https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
    const filterCallback = (_, index) => index !== clickedIndex;
    const newNames = this.state.names.filter(filterCallback);
    this.setState({ names: newNames });
  };
  addName = (input) => {
    const inputArray = [input];
    const newNames = this.state.names.concat(inputArray);
    this.setState({ names:newNames });
  };
  componentDidMount(){
    const savedState = localStorage.getItem("Names")
    if (savedState){
      const savedArray = JSON.parse(savedState);
      this.setState({names:savedArray})
    }
  };
  componentDidUpdate(){
    const stateStringNames = JSON.stringify(this.state.names);
    localStorage.setItem("Names",stateStringNames);
  };
  render() {
    return (
      <div className="App">
        <h1>Name Tag Generator</h1>
        <UserInput addName={this.addName}/>
        <NameTagList names={this.state.names} removeName={this.removeName} />
      </div>
    );
  }
}

export default App;
