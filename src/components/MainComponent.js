import React, { Component } from 'react';
import ToDo from './ToDoComponent'

class Main extends Component {

    constructor(props){
        super(props);
    }

    render () {
        return (
            <div>
                <h1>To-Do List</h1>
                <div>
                    <ToDo/>
                </div>
            </div>
        )
    }
}

export default Main;
