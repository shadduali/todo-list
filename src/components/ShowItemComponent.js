import React,{Component} from 'react';
import {Button, Modal, ModalHeader, ModalBody,
    Form, FormGroup, Input, ModalFooter } from 'reactstrap';
    
export default class ShowItem extends Component {
    
    constructor(props){
        super(props);
        this.state={
            text:"",
            key:"",
            isModalOpen: false
        }
        this.handleInputChange=this.handleInputChange.bind(this);
        this.toggleModal=this.toggleModal.bind(this);
    }

    toggleModal(){
        
        this.setState({
            isModalOpen: !this.state.isModalOpen,
        });
        
    }
    _handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            console.log("Hello");
          this.props.editItem(e,this.state.key,this.state.text);
        }
      }

    handleInputChange(event){    
        this.setState({
          text: event.target.value
        });
    }  

    render(){
        const {items,handleDelete,editItem,addCompleted}=this.props;    
        console.log("showitems"+items.length);
        return(
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-9 col-10 display-task">
                            {items.map((item) => {
                                return (
                                    <ul className="list-unstyled">
                                        <li key={item.key}>
                                            <i class="fa fa-circle-thin" onClick={(e)=>{addCompleted(e,item.key,item.text)}} aria-hidden="true"></i>
                                            <span className="task-text" onClick={() => {
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

                    <Modal contentClassName="modal-style" isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                        <ModalHeader modalClassName="modal-header" toggle={this.toggleModal}>Edit</ModalHeader>
                        <ModalBody modalClassName="modal-body">
                            <Form>
                                <FormGroup className="fontedit" row>
                                    <div className="col-10">
                                        <Input className="input-edit" type="text" id="edit" name="edit" value={this.state.text} 
                                        onChange={this.handleInputChange}  onKeyDown={this._handleKeyDown}/>
                                        <i class="fa fa-pencil" aria-hidden="true"></i>
                                    </div>
                                    <div className="col-2">
                                        <button className="edit-confirm-btn" onClick={(e)=>{editItem(e,this.state.key,this.state.text)}}>confirm</button>
                                    </div>
                                </FormGroup>
                            </Form>
                        </ModalBody>
                        <ModalFooter>
                            <div className="col-5 ml-0 mr-auto" >
                                <Button className="btn btn-light">
                                    <i className=" fa fa-angle-double-down" aria-hidden="true" onClick={this.toggleModal}> Close</i>
                                </Button>
                            </div>
                            <div className="col-3 ml-auto mr-0"> 
                                <Button className="btn btn-danger"><i class="fa fa-trash" aria-hidden="true" onClick={() => {
                                    this.toggleModal()
                                    handleDelete(this.state.key)}}> Delete</i>
                                </Button>
                            </div>
                        </ModalFooter>
                    </Modal>
                </div>
            </div>
        );
    }
}