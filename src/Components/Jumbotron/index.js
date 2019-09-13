import React, {Component} from 'react';
import {Container,Button, Jumbotron, Row, Col} from 'reactstrap';
import coding from './../Image/codingimage.jpg'
export default class App extends Component{
    render(){
        return(
            <div>
            <Jumbotron fluid style={{backgroundImage:`url(${coding})`, backgroundSize: 'cover', padding:'18%'}}>
                <Container className="text-center">
                <h1 style={{color:"white"}}>Welcome to the website</h1>
                </Container>
                <Row>
                    <Col>
                        
                    </Col>
                </Row>
            </Jumbotron>
            <h1>test</h1>
            </div>
        )
    }
}