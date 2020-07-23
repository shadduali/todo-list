import React, { Component } from 'react';
import {Jumbotron} from 'reactstrap';
import ToDo from './ToDoComponent'

class Main extends Component {

    constructor(props){
        super(props);
    }

    render () {
        return (
            <div>
                <Jumbotron>
                    <h1>To-Do List</h1>
                </Jumbotron>
                <div>
                    <ToDo/>
                </div>
            </div>
        )
    }
}

export default Main;
