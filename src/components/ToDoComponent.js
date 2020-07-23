import React, {Component} from 'react';
import {Button, Form, FormGroup,Input, Col } from 'reactstrap';
import ShowItem from './ShowItemComponent';

function AddItem({item,handleInputChange,handleSubmit}){
    return(
        <div>
            <Form onSubmit={handleSubmit}>
                <FormGroup row>
                    <Col md={10}>
                        <Input type="text" id="todoitem" name="todoitem" value={item} placeholder="Add item" onChange={handleInputChange} />
                    </Col>
                    <Button type="submit" color="primary">
                            Add
                    </Button>
                </FormGroup>
            </Form>
        </div>
    )
}

class ToDo extends Component {

    constructor(props){
        super(props);
        this.state={
            item:'',
            items:[]
        }
        this.handleInputChange=this.handleInputChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleDelete=this.handleDelete.bind(this);
        this.editItem=this.editItem.bind(this);
    }

    editItem(e,key,text){
        console.log("edited");
        this.setState({
            items:this.state.items.map(item=>(item.key===key?{...item,text}:item))
        });
        e.preventDefault();
    }

    handleInputChange(event){    
        this.setState({
          item: event.target.value
        });
    }
        
    handleSubmit(event){
        if (this.state.item !== "") {
            var newItem = {
              text: this.state.item,
              key: Date.now()
            };
            this.setState((prevState) => {
              return { 
                items: prevState.items.concat(newItem) 
              };
            });
            console.log('Current State is: ' + this.state.item);
            this.setState({
                item:""
            });
        }
        event.preventDefault();
    }

    handleDelete(key) {
        console.log("hatao");
        const filtered=this.state.items.filter((item)=>item.key!==key);
        this.setState({
            items:filtered
        })
    } 
    
    render () {
        
        return (
            <div> 
                <div className="container">
                    <div className="row"> 
                        <div className="col-12 col-md-9">
                            <AddItem item={this.state.item} handleInputChange={this.handleInputChange} handleSubmit={this.handleSubmit}/>
                        </div>
                    </div>
                    <div className="row"> 
                        <div className="col-12 col-md-9">
                            <ShowItem items={this.state.items} handleDelete={this.handleDelete} editItem={this.editItem}/>
                        </div>
                    </div>
                </div>    
            </div>
        )
    }
}

export default ToDo;