import React, { Component } from "react";

 class Img extends Component {
     render(){
         return(
            <img src={this.props.src} alt={this.props.alt} className={this.props.className} />
         )
     }
 }
 export default Img;