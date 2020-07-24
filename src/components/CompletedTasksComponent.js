import React from 'react';

export default function CompletedTasks({completed,undoAddCompleted}){
    
    if(completed.length>0){
        return(
            <div className="container">
                <h4>Completed</h4>
                <div className="row">
                    <div className="col-md-9 col-10 display-task">
                        {completed.map((item) => {
                            return (
                                <ul className="list-unstyled">
                                    <li key={item.key}>
                                        <i class="fa fa-check" onClick={(e)=>{undoAddCompleted(e,item.key,item.text)}} aria-hidden="true"></i>
                                        <span className="task-text-completed" onClick={() => {
                                            this.setState({
                                                text:item.text,
                                                key:item.key});
                                            this.toggleModal()}}>{item.text}
                                        </span>
                                    </li>
                                </ul>
                            );
                        })}
                    </div>
                </div>
            </div>
        )
    }
    else{
        return(
            <div/>
        )
    }
}