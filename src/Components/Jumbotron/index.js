import React, {Component} from 'react';
import {Container,Button, Jumbotron, Row, Col} from 'reactstrap';
import coding from './../Image/codingimage.jpg'
export default class AppJumbotron extends Component{
    render(){
        return(
            <div>
            <Jumbotron fluid style={{backgroundImage:`url(${coding})`, backgroundSize: 'cover', padding:'18%'}}>
                <Container className="text-center">
                <h1 style={{color:"white"}}>Welcome to the website</h1>
                </Container>
                
            </Jumbotron>
            <Container>
            <Row>
                    <Col className="text-center">

                        <h2>Javascript</h2>
                    </Col>
                    <Col className="text-center">
                        <h2>Python</h2>
                    </Col>
            </Row>
            </Container>
            </div>
        )
    }
}