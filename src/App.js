import React from 'react';
import './App.css';
import Snipped from './Snippet'

// constructor gets executed as the very first thing in the class initialization
// render will re-render at every state/props change
// componentDidMount It gets executed once after the componenct finished the first rendering
// componentWillUnmount gets executed after a component disappear from the DOM
// componentDidUpdate gets executed every time the component gets updated

class App extends React.Component {

  // constructor(props) {
  //  super(props)
  // }

  
  state = {
    test: ``, 
    show: true
  }

  componentDidMount = async () => {
    console.log("Component mounted")
    // Perfect for async calls, "let response = async"
  }

  buttonClick = () => {
    this.setState({
      test: `something`,
      show: !this.state.show
    })
  }

  componentDidUpdate = () => {
    if(this.state.test !== 'something else'){
      console.log("Component updated")
      this.setState({
        test: this.state.test + ' else'
      })
    }
  }

  render(){
    console.log("Render")

  return (
    <div className="App">
      <header className="App-header">
        <button type="button" onClick={this.buttonClick}>Press Me</button>
          {this.state.show && <Snipped title="HELLO"></Snipped>}
      </header>
    </div>
  );
  }
}

export default App;
