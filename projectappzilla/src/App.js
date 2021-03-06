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
delete = id =>{
  axios
  .delete(`http://localhost:5000/projects/${id}`)
  .then(response =>{
      this.updateState();
  })
  .catch(err =>{
      console.log(err);
  });
};


  render() {
    console.log(this.state.projects)
    return (
      <div className="App">
    <ProjectList projects={this.state.projects} updateState={this.updateState} delete={this.delete}/>
      </div>
    );
  }
}

export default App;
