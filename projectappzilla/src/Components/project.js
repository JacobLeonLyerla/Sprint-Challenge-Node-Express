import React, { Component } from 'react';
import axios from 'axios';
import { Card, CardText, CardBody,
    CardTitle, CardSubtitle, Button,Label,FormGroup,Input, Col,Row, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


class Post extends Component{
    constructor(props){
        super(props);
        this.state={
         modal:false,   
        name:'',
        description:'',
        
  
    }
    this.toggle = this.toggle.bind(this);
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


      toggle() {
        this.setState({
          modal: !this.state.modal
        });
      }

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
          <Button color="danger" onClick={this.toggle}>Delete</Button>
          <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Are you sure you wish to delete this?</ModalHeader>
          <ModalFooter>
              <Row>
              <Col xs="6">
            <Button color="danger" onClick={() => this.props.delete(this.props.id)}>Do Something</Button>
            </Col>
            <Col xs="6">
            <Button color="primary" onClick={this.toggle}>Cancel</Button>
            </Col>
            </Row>
          </ModalFooter>
        </Modal>
          </Col>
          <Col xs="6">
          <Button color="success"  onClick={() => this.updateProject(this.props.id)}>update</Button>
          </Col>
    </Row>
        </CardBody>
      </Card>
    </div>
   </React.Fragment> )
}



}
export default Post