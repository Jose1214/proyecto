import React, { Component } from "react";
import { Form } from "react-bootstrap";
 class Label extends Component {
     render(){
         return(             
            <Form.Label className={this.props.className}>{this.props.msg}</Form.Label>
         )
     }
 }
 export default Label;