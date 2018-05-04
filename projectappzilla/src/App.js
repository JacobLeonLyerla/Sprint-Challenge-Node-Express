import React, { Component } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';
import ProjectList from './Components/projectList'
const url = 'http://localhost:5000/posts'
class App extends Component {

  state={
    projects:[]
  }
componentDidMount(){
  this.updateState()
}

updateState = () =>{
  axios
  .get('http://localhost:5000/projects')
  
  .then(response =>{
    console.log(response)
    this.setState({projects: response.data})
  })
  .catch(err =>{
    console.log(err)
  })
}


  render() {
    console.log(this.state.projects)
    return (
      <div className="App">
    <ProjectList projects={this.state.projects}/>
      </div>
    );
  }
}

export default App;
