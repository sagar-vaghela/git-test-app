import Modal from 'react-modal';
import React, { Component } from "react";         

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };
class Googlemap extends Component{
    constructor(){
        super();
        this.state={modalIsOpen : false}
    }
    openModal=()=>{
        this.setState({modalIsOpen : true})
    }
    openModal=()=>{
        this.setState({modalIsOpen : false})
    }
    render(){
        return(
            <section>
                <button onClick={this.openModal}>Open Modal</button>
                    <Modal
                        isOpen={this.state.modalIsOpen}
                        onAfterOpen={this.state.afterOpenModal}
                        onRequestClose={this.state.closeModal}
                        style={customStyles}
                        contentLabel="Example Modal">
                        <button onClick={this.closeModal}>close</button>
                            <div>I am a modal</div>
                            <form>
                                <input />
                                <button>tab navigation</button>
                                <button>stays</button>
                                <button>inside</button>
                                <button>the modal</button>
                            </form>
                    </Modal>
            </section>
        )
    }
}
export default Googlemap;