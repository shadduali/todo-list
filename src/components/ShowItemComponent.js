import React,{Component} from 'react';
import {Button, Modal, ModalHeader, ModalBody,
    Form, FormGroup, Input } from 'reactstrap';

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
        const {items,handleDelete}=this.props;    
        return(
            <div>
                {items.map((item) => {
                    return (
                        <ul className="list-unstyled">
                            <li key={item.key}>
                                <Button className="btn btn-light" onClick={() => {
                                    this.setState({
                                        text:item.text,
                                        key:item.key});
                                    this.toggleModal()}}>{item.text}</Button>
                            </li>
                        </ul>
                    );
                })}

                <Modal modalClassName="modal fade" isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader modalClassName="modal-header" toggle={this.toggleModal}>Edit</ModalHeader>
                    <ModalBody modalClassName="modal-body">
                        <Form>
                            <FormGroup row>
                                <Input type="text" id="edit" name="edit" value={this.state.text} 
                                onChange={this.handleInputChange}  onKeyDown={this._handleKeyDown}/>
                            </FormGroup>
                            <FormGroup row>
                                <Button onClick={this.toggleModal}>Hide Edit Mode</Button>
                                <Button onClick={() => {
                                    this.toggleModal()
                                    handleDelete(this.state.key)}}>Delete</Button>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}