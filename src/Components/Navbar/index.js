import React, {Component} from 'react';
import {Navbar,NavbarBrand, NavbarToggler,Collapse, Nav, NavItem, NavLink, Input} from 'reactstrap';
import GOGOGRAM from './GOGOGRAM.png'
export default class app extends Component{
    constructor(props){
        super(props);
        
        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        }
    }
        toggle(){
            this.setState({
                isOpen: !this.state.isOpen
            })
        } 
    
    render(){
        return(
            <div>
                <Navbar color="dark" dark expand="md">
                    <NavbarBrand style={{color:"white"}}>
                        <img src={GOGOGRAM} width="42px"/>{' '}
                        GOGOGRAM
                    </NavbarBrand>
                    <NavbarToggler onClick={this.toggle}/>
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem style={{color:"white"}}>
                                <NavLink to="">
                                    Home
                                </NavLink>
                            </NavItem>{' '}
                            <NavItem>
                                <NavLink>
                                    about
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink>
                                    Info
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <Input 
                                type="search" 
                                name="search"
                                id="search"
                                placeholder="search"
                                /> 
                            </NavItem>
                            
                        </Nav>

                    </Collapse>
                </Navbar>
            </div>
        )
    }
}