import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css'

import Lg from './Lg.png';
import {Navbar,Nav,NavDropdown,Form,FormControl,Button} from 'react-bootstrap';
import PDF from './Chandraprakash.pdf';
class Nvbar extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             pdf: PDF
        }
    }
    
    render() {
        return (
         
                <Navbar bg="dark" variant="dark" sticky="top" expand="lg">
                    <Navbar.Brand>
                        <img src={Lg} width="200px" height="80px" />{''}
                    </Navbar.Brand>
               
                <Navbar.Toggle/>
                <Navbar.Collapse>
                <Nav>
                     <Nav.Link href="www.telus.com">WorkDay Policy</Nav.Link>
                     <Nav.Link href={PDF}>Resume</Nav.Link>
                     <Nav.Link >Important Documents</Nav.Link>
                     <Nav.Link href="/">Logout</Nav.Link>
                </Nav>
                </Navbar.Collapse>
                </Navbar>
               
        
        )
    }
}

export default Nvbar;
