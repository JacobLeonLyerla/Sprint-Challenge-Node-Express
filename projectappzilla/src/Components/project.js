import React, { Component } from 'react';
import axios from 'axios';
import { Card, CardText, CardBody,
    CardTitle, CardSubtitle, Button,Label,FormGroup,Input, Col,Row } from 'reactstrap';


class Post extends Component{
    state={
        title:'',
        contents:'',
        answer:''
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
            <Col>
          <Input  
          onChange={this.setInput}
          type="textarea" 
          name="answer" 
          id="exampleText"
          value={this.state.name}
           />
           </Col>
                 <Input 
          onChange={this.setInput}
          type="textarea" 
          name="answer" 
          id="exampleText"
          value={this.state.name}
           />
                 <Input 
          onChange={this.setInput}
          type="textarea" 
          name="answer" 
          id="exampleText"
          value={this.state.name}
           />
           </Row>
        </FormGroup>
     <div className="btn-container">
          <Button col-6>Delete</Button>
     
          <Button >update</Button>
    </div>
        </CardBody>
      </Card>
    </div>
   </React.Fragment> )
}



}
export default Post