import React, {Component} from 'react';
import {
    Navbar,
    NavbarBrand,
    NavbarToggler,
    Collapse,
    Nav,
    NavItem,
    Input,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    UncontrolledDropdown
} from 'reactstrap';
import {Route, Switch, HashRouter, NavLink} from 'react-router-dom'
import GOGOGRAM from './GOGOGRAM.png'
import About from './../About'
import Javascript from './../Javascript'
import Python from './../Python'
import Home from './../Home'

export default class app extends Component {
    constructor(props) {
        super(props);

        this.toggle = this
            .toggle
            .bind(this);
        this.state = {
            isOpen: false
        }
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    render() {
        return (
            <HashRouter>
                <div>
                    <Navbar color="dark" dark expand="md">
                        <NavbarBrand 
                            style={{
                            color: "white"
                        }}>
                            <img src={GOGOGRAM} width="42px"/>{' '}
                            GOGOGRAM
                        </NavbarBrand>
                        <NavbarToggler onClick={this.toggle}/>
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>

                                <NavItem className="mt-1 text-center" style={{paddingRight:'10px', paddingTop:'4px'}}>
                                    <NavLink to="/" activeClassName="active" >
                                        Home
                                    </NavLink>{' '}
                                </NavItem>
                                <NavItem className="mt-1 text-center" style={{paddingRight:'10px', paddingTop:'4px'}}>
                                    <NavLink
                                        to="About"
                                        activeClassName="active"
                                        activeStyle={{
                                        color: 'red'
                                    }}>
                                        About
                                    </NavLink>
                                </NavItem>
                                
                                <UncontrolledDropdown nav inNavBar>
                                    <DropdownToggle
                                        color="dark"
                                        activeClassName="active"
                                        activeStyle={{
                                        color: 'red'
                                    }}
                                    style={{paddingRight:'4px'}}
                                        className="text-center"
                                        nav
                                        caret>
                                        Course
                                    </DropdownToggle>
                                    <DropdownMenu left>
                                        <DropdownItem>
                                            <NavLink to="/Javascript">
                                                Javascript
                                            </NavLink>
                                        </DropdownItem>
                                        <DropdownItem>
                                            <NavLink to="/Python">
                                                Python
                                            </NavLink>
                                        </DropdownItem>
                                    </DropdownMenu> 
                                </UncontrolledDropdown>

                                <NavItem className="mt-1">
                                    <Input type="search" name="search" id="search" placeholder="search"/>
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