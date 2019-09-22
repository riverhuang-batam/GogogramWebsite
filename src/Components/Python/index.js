import React, {Component} from 'react'
import {Jumbotron, Container, Row, Col} from 'reactstrap'
import python from './Python.jpg'
import pythonsalary from './pythonsalary.png'
import pythonframework from './pythonframework.jpg'

export default class Python extends Component{
    render(){
        return(
            <div>
                <Jumbotron fluid style={{background:`url('${python}')`, backgroundSize:'cover', padding:'20%', position:'relative'}}>
                <div style={{backgroundColor:'black', position:'absolute', top:'0',left:'0',bottom:'0',right:'0', opacity:'0.3'}}></div>
                    <h1 style={{color:'white'}}>Python</h1>
                </Jumbotron>
                
                <Container>
                <h5>so what can we do by learning python?</h5>
                <h5>we can learn about machine learning for making AI(Artificial Inteligence)</h5>
                <h5>Python for Web Development</h5>
                <h5>Scientific and Numeric Computing</h5>
                <h5>Function Decorators Allow Enhanced Functionality</h5>
                <h5>Machine Learning (ML)</h5>
                <h5>Browser Automation</h5>
                <h5>Python Makes Robotics Possible</h5>
                <h2>But why learn python</h2>
                <h5>Python is a general-purpose language, which means it can be used to build just about anything, which will be made easy with the right tools/libraries.
                    Professionally, Python is great for backend web development, data analysis, artificial intelligence, and scientific computing. 
                    Many developers have also used Python to build productivity tools, games, and desktop apps, 
                    so there are plenty of resources to help you learn how to do those as well.</h5>

                <h2>python Framework</h2>
                    <Row>
                        <Col xs="12">
                    <img src={pythonframework} width="100%"/>
                    </Col>
                    </Row>
                <h5>On the picture is the python framework you can learn and use for you're project even in work sometime you will use one of those framework for you're project. So is a good thing to learn a framework</h5>

                <h2>Most need developer python chart</h2>
                <h5>So if you want to know what needed python developer in this world</h5>

                <h2>Salary python</h2>
                <Row>
                <Col xs="12">
                <img src={pythonsalary} width="100%"/>
                </Col>
                </Row>
                </Container>
            </div>
        )
    }
}