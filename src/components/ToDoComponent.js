import React, {Component} from 'react';
import {Button, Form, FormGroup,Input, Col } from 'reactstrap';
import ShowItem from './ShowItemComponent';
import CompletedTasks from './CompletedTasksComponent';

function AddItem({item,handleInputChange,handleSubmit}){
    return(
        <div>
            <Form onSubmit={handleSubmit}>
                <FormGroup className="add-task-form row">
                    <Col className="col-9" >
                        <Input type="text" className="input-task" id="todoitem" name="todoitem" value={item} 
                        placeholder="Add tasks" onChange={handleInputChange} /><i class="fa fa-tasks"></i>
                    </Col>
                    <Col className="col-2" >
                        <Button type="submit" color="primary">Add</Button>
                    </Col>
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
            items:[],
            completed:[]
        }
        this.handleInputChange=this.handleInputChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleDelete=this.handleDelete.bind(this);
        this.editItem=this.editItem.bind(this);
        this.addCompleted=this.addCompleted.bind(this);
        this.undoAddCompleted=this.undoAddCompleted.bind(this);
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
    
    addCompleted(e,k,txt){
        if (txt!=="") {
            var newItem = {
              text: txt,
              key: k
            };
            this.setState((prevState) => {
              return { 
                completed: prevState.completed.concat(newItem) 
              };
            });
            console.log('added data is: ' + txt);

            const filtered=this.state.items.filter((item)=>item.key!==k);
            this.setState({
                items:filtered
            })
        }
        e.preventDefault();
    }

    undoAddCompleted(e,k,txt){
        if (txt !== "") {
            var newItem = {
              text: txt,
              key: k
            };
            this.setState((prevState) => {
              return { 
                items: prevState.items.concat(newItem) 
              };
            });
            console.log('undo state: ' + txt);

            const filtered=this.state.completed.filter((item)=>item.key!==k);
            this.setState({
                completed:filtered
            })
        }
        e.preventDefault();
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
                        <div className="col-10 col-md-9">
                            <AddItem item={this.state.item} handleInputChange={this.handleInputChange} handleSubmit={this.handleSubmit}/>
                        </div>
                    </div>
                    <div className="row"> 
                        <div className="col-12 col-md-9">
                            <ShowItem items={this.state.items} handleDelete={this.handleDelete} editItem={this.editItem} 
                            addCompleted={this.addCompleted}/>
                        </div>
                    </div>
                    <div className="row"> 
                        <div className="col-12 col-md-9">
                            <CompletedTasks undoAddCompleted={this.undoAddCompleted} completed={this.state.completed}/>
                        </div>
                    </div>
                </div>    
            </div>
        )
    }
}

export default ToDo;