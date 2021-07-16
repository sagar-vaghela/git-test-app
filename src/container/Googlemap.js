import React, { Component } from "react";         
import { Button, Modal } from 'react-bootstrap';
class Googlemap extends Component{
    constructor(){
        super();
        this.state={show : false}
    }
    openModal=()=>{
        this.setState({show : true})
    }
    closeModal=()=>{
        this.setState({show : false})
    }
    render(){
        const { show } = this.state;
        console.log(show);
        return(
            <div>
                <Button variant="primary" onClick={this.openModal}>
                        Launch vertically centered modal
                    </Button>
                <Modal
                    show={show}
                    onHide={this.closeModal}
                    backdrop="static"
                    keyboard={false}
                >
                    <Modal.Header>
                    <Modal.Title>Modal title</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    I will not close if you click outside me. Don't even try to press
                    escape key.
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={this.closeModal}>
                        Close
                    </Button>
                    <Button variant="primary">Understood</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}
export default Googlemap;