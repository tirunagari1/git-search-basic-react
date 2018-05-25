import React, { Component } from 'react';
import './App.css';
import User from './User'

class App extends Component {
  state={
    user:{}
  }
  getUser=(e)=>{
    const name = this.refs.first.value;
    fetch(`https://api.github.com/users/${name}`)
    .then(Response => Response.json())
    .then(data => {
      this.setState({
        user:{
          name: data.name,
          location: data.location,
          id :data.id
        }
      })
    })
  }
  render() {
    const { user } = this.state ;
    return (
      <div className="App">
      <input type= 'text' placeholder='Enter GitHub UserName' ref='first' onChange={this.getUser} />
   
      <User user={user}/>

      </div>
    );
  }
}

export default App;
