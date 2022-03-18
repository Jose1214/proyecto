import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
class Input extends Component {
    render(){
        return(  
            <Form.Control type={this.props.type} placeholder={this.props.placeholder} />
        )
    }
 }
 export default Input;