import React, {Component} from 'react'
import {Jumbotron, Container, Row, Col} from 'reactstrap'
import python from './Pythonweb.png'
import pythonsalary from './pythonsalary.png'
import pythonframework from './pythonframework.jpg'
import pythonneed from './pythonneed.png'

export default class Python extends Component{
    render(){
        return(
            <div>
                <Jumbotron fluid style={{background:`url('${python}')`, backgroundSize:'cover', padding:'16%', position:'relative'}}>
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
                <div className="mt-4">
                    <h2> Needed Developer</h2>
                    <h5>
                        So every year company need developer but how many company need a python developer. If you want to find a job and haven't get a job i recomend you need to know what company need what kind of python developer. in this picture let you know what kind python developer need for company so you want to learn it and hopufully get a job.
                    </h5>
                </div>
                <div className="text-center">
                <img src={pythonneed} width="50%" />
                </div>
                </Container>
            </div>
        )
    }
}