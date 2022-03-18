import React, { Component } from "react";
import { Button } from "react-bootstrap" 
 class Boton extends Component {
     render(){
         return(
             <Button variant={this.props.variant} type="submit">{this.props.msg}</Button>
         )
     }
 }
 export default Boton;