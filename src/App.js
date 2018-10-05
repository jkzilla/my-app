import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "Happiness is a warm puppy",
    };
  }
  
  render() {
    return (
      <div className="App" className="App-header" >
        <header>{this.state.value}</header>
        {/* continuous integration and delivery platform  */}
        <button type="button" id="button1" onClick={() => this.setState({value: 'Happiness is an excellent continuous integration and delivery platform!'})} style={{background: "blue", border: "none", color: "white", padding: "15px 32px", fontSize: "16px"}} >Button #42</button>

      </div>
    );
  }
}

export default App;
