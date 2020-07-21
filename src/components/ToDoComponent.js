import React, {Component} from 'react';
import {Button, Form, FormGroup, Label, Input, Col,FormFeedback } from 'reactstrap';

class ToDo extends Component {

    constructor(props){
        super(props);
        this.state={
            items:''
        }
        this.handleInputChange=this.handleInputChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleInputChange(event){    
        this.setState({
          items: event.target.value
        });
    }
        
    handleSubmit(event){
        alert('Current State is: ' + JSON.stringify(this.state));
        event.preventDefault();
    }

    render () {
        return (
            <div> 
                <div className="container">
                    <div className="row"> 
                        <div className="col-12 col-md-9">
                            <Form onSubmit={this.handleSubmit}>
                                <FormGroup row>
                                    <Col md={10}>
                                        <Input type="text" id="todoitem" name="todoitem" placeholder="Add item"
                                            value={this.state.todoitem} onChange={this.handleInputChange} />
                                    </Col>
                                    <Button type="submit" color="primary">
                                            Add
                                    </Button>
                                </FormGroup>
                            </Form>
                        </div>
                    </div>
                </div>    
            </div>
        )
    }
}

export default ToDo;