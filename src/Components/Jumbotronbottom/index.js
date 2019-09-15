import React, {Component} from 'react';
import {Jumbotron, Container, Row, Col} from 'reactstrap';

export default class Jumbotronbottom extends Component{
    render(){
        return(
            <div>
                <Jumbotron style={{backgroundColor:"black"}} className="mt-4">
                    <Container>
                    <Row>
                        <Col xs="6">
                            <h2 style={{color:"white"}}>Sponsor by</h2>
                            <a>Avalon City</a>
                        </Col>
                        <Col xs="6">
                            <h2 style={{color:"white"}}>this is</h2>
                        </Col>
                    </Row>
                    </Container>
                </Jumbotron>
            </div>
        )
    }
}