import React, { Component } from 'react';
import axios from 'axios';
import { Card, CardText, CardBody,
    CardTitle, CardSubtitle, Button,Label,FormGroup,Input, Col,Row } from 'reactstrap';


class Post extends Component{
    state={
        name:'',
        description:''
  
    }
    updateProject = id => {
        const project = {};
        if (this.state.name !== '') {
          project.name = this.state.name;
        }
         if (this.state.description !== '') {
          project.description = this.state.description;
        }
        axios
          .put(`http://localhost:5000/projects/${id}`, project)
          .then(response => {
              console.log(this.props)
            this.setState({name: '', description: ''});
            this.props.updateState();
          })
          .catch(err => {
            console.log(err);
          });
      };




    setInput = (element)=>{
        this.setState({[element.target.name]: element.target.value})
       }
render(){
    console.log(this.props)
    return(<React.Fragment>
    <div>
      <Card>
          
        <CardBody>
          
          <CardTitle>{this.props.name}</CardTitle>
          <FormGroup>
          <Label for="exampleText">{this.props.description}</Label>
          <Row>
            <Col xs="6">
          <Input  
          onChange={this.setInput}
          type="input" 
          placeholder="name"
          name="name" 
          id="exampleText"
          value={this.state.name}
           />
           </Col>
           <Col xs="6">
                 <Input 
          onChange={this.setInput}
          type="input" 
          placeholder="description"
          name="description" 
          id="exampleText"
          value={this.state.description}
           />
      </Col>
     
           </Row>
        </FormGroup>
     <Row>
         <Col xs="6">
          <Button >Delete</Button>
          </Col>
          <Col xs="6">
          <Button  onClick={() => this.updateProject(this.props.id)}>update</Button>
          </Col>
    </Row>
        </CardBody>
      </Card>
    </div>
   </React.Fragment> )
}



}
export default Post