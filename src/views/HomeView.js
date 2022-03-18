import React from "react";
import { Form, Row } from "react-bootstrap";
import Boton from "../components/Elements/Button";
import Input from "../components/Elements/Input";
import Label from "../components/Elements/Label";
import '../assets/css/HomeView.css'
import '../scss/custom.scss'
import Img from "../components/Elements/Img";
import Logo from '../assets/img/LogoNaranja.png'
const HomeView = ( props ) => {
    return (
        <div className="form__1">
            
            <Form className="form" >                
                <Img  className="logo__1" src={Logo} alt="logo_sena_orange"/>                
                <Row xs={7}>
                    <Form.Group className="mb-3">
                        <Label msg='Usuario'/>
                        <Input placeholder="usuario" type="text"/>
                    </Form.Group>
                </Row>
                <Row xs={7}>
                    <Form.Group className="mb-3">
                        <Label msg='Contraseña'/>
                        <Input placeholder="password" type="password"/>
                    </Form.Group>
                </Row>
                <Boton className='primary' msg="aceptar" type="submit" />                                        
            </Form>
        </div>
    )
}
export default HomeView;