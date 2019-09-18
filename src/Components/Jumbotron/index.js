import React, {Component} from 'react';
import {Button, Jumbotron, Container} from 'reactstrap';
import coding from './../Image/codingimage.jpg'
export default class AppJumbotron extends Component{
    render(){
        return(
            <div>
            <Jumbotron fluid style={{background:`url(${coding})`, backgroundSize: 'cover', padding:'18%'}}>
                <Container className="text-center">
                <h1 style={{color:"white"}}>Welcome to the GOGOGRAM</h1>
                </Container>
            </Jumbotron>

            </div>
        )
    }
}