import React, {Component} from 'react';
import {Button, Jumbotron, Container} from 'reactstrap';
import coding from './../Image/codingimage.jpg'
export default class AppJumbotron extends Component{
    render(){
        return(
            <div>
            <Jumbotron fluid style={{backgroundImage:`url(${coding})`, backgroundSize: 'cover', position:'relative'}}>
                <div style={{backgroundColor:'lightBlue', position:'absolute', top:'0',left:'0',bottom:'0',right:'0', opacity:'0.3'}}></div>
                
                <Container className="text-center">
                <h1 style={{color:"white"}}>Welcome to the GOGOGRAM</h1>
                </Container>
            </Jumbotron>

            </div>
        )
    }
}