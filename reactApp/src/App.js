import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      user : [ 
      
       ]   
   }
  }

  componentDidMount(){

  }

  func = () => {
    fetch('/addDatabase')
    // fetch('/test')
    //   .then(res => res.json())
    //   .then(user => this.setState({user}, () => console.log("fetching", user)))
  }

  render(){
    return (
      <div className="App">
        test
        <ul>
          {
            this.state.user.map(user => <li key={user.id}>{user.name} {user.lastname}</li>)
          }
        </ul>
        <button onClick={this.func}>fetch</button>
      </div>
    );
  }
  
}

export default App;
