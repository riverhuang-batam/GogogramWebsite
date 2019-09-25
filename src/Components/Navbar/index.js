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
    UncontrolledDropdown,
    Container,
    Button
} from 'reactstrap';
import linked from './linked.png'
import github from './github.png'
import facebook from './facebook.png'
import instagram from './instagram.png'
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
                                <NavLink
                                    to="/"
                                    style={{
                                    color: 'white',
                                }}>
                                    <NavItem className="text-center">

                                        Home

                                    </NavItem>
                                </NavLink>
                                <NavLink
                                    to="About"
                                    style={{
                                    color: 'white',
                                }}>
                                    <NavItem className="text-center">
                                        About
                                    </NavItem>
                                </NavLink>

                                <UncontrolledDropdown nav inNavBar>
                                    <DropdownToggle
                                        body
                                        inverse
                                        color="dark"
                                        style={{
                                        color: 'white'
                                    }}
                                        className="text-center"
                                        nav
                                        caret>
                                        Course
                                    </DropdownToggle>
                                    <DropdownMenu right>
                                        <NavLink to="/Javascript">
                                            <DropdownItem>
                                                Javascript
                                            </DropdownItem>
                                        </NavLink>
                                        <NavLink to="/Python">
                                            <DropdownItem>
                                                Python
                                            </DropdownItem>
                                        </NavLink>
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
                <Container>
                    <div className="text-center mt-4">
                        <a href="https://www.linkedin.com/in/river-huang-43a979192/">
                            <img src={linked} width="28px"/>{' '}
                        </a>
                        <a href="https://github.com/riverhuang-batam/">
                            <img src={github} width="30px"/>{' '}
                        </a>
                        <a href="https://www.facebook.com/river.huang.1042">
                            <img src={facebook} width="30px"/>{' '}
                        </a>
                        <a href='https://www.instagram.com/huang.river/'>
                            <img src={instagram} width="30px"/>
                        </a>
                    </div>
                    <div className="text-center mt-4 mb-4">
                        copyright © Term|RIVERWebsite made by River. All Rights Reserved.
                    </div>
                </Container>
            </HashRouter>
        )
    }
}