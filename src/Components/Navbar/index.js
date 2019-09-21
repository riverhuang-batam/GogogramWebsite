import React, {Component} from 'react';
import {Navbar,NavbarBrand, NavbarToggler,Collapse, Nav, NavItem, Input} from 'reactstrap';
import {NavLink, Route, Switch, HashRouter} from 'react-router-dom'
import GOGOGRAM from './GOGOGRAM.png'
import About from './../About'
import Javascript from './../Javascript'
import Python from './../Python'
import Home from './../Home'

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
            <HashRouter>
            <div>
                <Navbar color="dark" dark expand="md">
                    <NavbarBrand style={{color:"white"}}>
                        <img src={GOGOGRAM} width="42px"/>{' '}
                        GOGOGRAM
                    </NavbarBrand>
                    <NavbarToggler onClick={this.toggle}/>
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav classNapyyme="ml-auto" navbar>
                            <NavItem style={{color:"white"}}>
                                <NavLink to="/">
                                    Home
                                </NavLink>
                            </NavItem>{' '}
                            <NavItem>
                                <NavLink to="About">
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
                
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/About" component={About}/>
                    <Route exact path="/Python" component={Python}/>
                    <Route exact path="/Javascript" component={Javascript}/>
                </Switch>
            </div>
            copyright © Term|RIVERWebsite made by River. All Rights Reserved.
            </HashRouter>
        )
    }
}