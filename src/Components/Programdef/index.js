import React, {Component} from 'react'
import {Row, Col,Container} from 'reactstrap'
import python from './python.png'
import javascript from './javascript.png'
import go from './GO.png'
import csharp from './csharp.png'
import swift from './swift.png'
export default class Programdef extends Component{
    render(){
        return(
            <Container>
                <h1>1. Intro</h1>
                <h4>GOGOGRAM is the website to help you learn about programming. we start from basic so that you can be a pro programmer too in near future so get ready to become a new programmer</h4>
                <h1 className="text-center mb-4">programming language</h1>
                <Row>
                    <Col className="text-center">
                        <h2>Javascript</h2>
                        <img src={javascript} width="75px" className="mt-2"/>
                    </Col>
                    <Col className="text-center">
                        <h2>Python</h2>
                        <img src={python} width="65px" className="mt-2"/>
                    </Col>
                    <Col className="text-center">
                        <h2>C#</h2>
                        <img src={csharp} width="75px" />
                    </Col>
                    <Col className="text-center">
                        <h2>GO</h2>
                        <img src={go} width="80px" />
                    </Col>
                    <Col className="text-center">
                        <h2>Swift</h2>
                        <img src={swift} width="70px" className="mt-2"/>
                    </Col>
                </Row>
            </Container>
        )
    }
}