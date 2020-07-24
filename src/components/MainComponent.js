import React, { Component } from 'react';
import {Jumbotron} from 'reactstrap';
import ToDo from './ToDoComponent'

class Main extends Component {

    render () {
        return (
            <div >
                <Jumbotron>
                    <h1>TasksTo-Do</h1>
                </Jumbotron>
                <div className="container-body">
                    <ToDo/>
                </div>
            </div>
        )
    }
}

export default Main;
