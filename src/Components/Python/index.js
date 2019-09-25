import React, {Component} from 'react'
import {Jumbotron, Container, Row, Col} from 'reactstrap'
import python from './Pythonweb.png'
import pythonsalary from './pythonsalary.png'
import pythonframework from './pythonframework.jpg'
import pythonneed from './pythonneed.png'
import pythoncando from './pythoncando.jpg'
import reasonlearnpython from './reasonlearnpython.jpg'

export default class Python extends Component {
    render() {
        return (
            <div>
                <Jumbotron
                    fluid
                    style={{
                    background: `url('${python}')`,
                    backgroundSize: 'cover',
                    padding: '20%',
                    position: 'relative'
                }}></Jumbotron>
                <Container>
                    <h2>why learn python?</h2>
                    <Jumbotron
                        fluid
                        style={{
                        background: `url('${reasonlearnpython}')`,
                        backgroundSize: 'cover',
                        padding: '23%',
                        position: 'relative'
                    }}></Jumbotron>
                    <h5>Python is a general-purpose language, which means it can be used to build
                        just about anything, which will be made easy with the right tools/libraries.
                        Professionally, Python is great for backend web development, data analysis,
                        Browser Automation, artificial intelligence, function Decorators Allow Enhanced
                        Functionality, and scientific computing. Many developers have also used Python
                        to build productivity tools, games, and desktop apps, so there are plenty of
                        resources to help you learn how to do those as well.</h5>

                    <h2>python Framework</h2>
                    <Row>
                        <Col xs="12">
                            <img src={pythonframework} width="100%"/>
                        </Col>
                    </Row>
                    <h5 className="mt-2">There is a so many variety of Python frameworks that make creating web
                        applications much easier. These frameworks bring together the modules and
                        packages that allow you to build applications quickly, without the need to take
                        care of involved details, like sockets and protocols, all in one place. On the
                        picture is the python framework you can learn and use for you're web application
                        project even in work sometime you will use one of those framework. So is a good
                        thing to learn a framework</h5>
                    <h2>Salary python</h2>
                    <Row>
                        <Col xs="12">
                            <img src={pythonsalary} width="100%"/>
                        </Col>
                    </Row>
                    <h5 className="mt-2 mb-4">On Angel List, Python is the 2nd most demanded skill and also the skill with
                        the highest average salary offered. With the rise of big data, Python developers
                        are in demand as data scientists, especially since Python can be easily
                        integrated into web applications to carry out tasks that require machine
                        learning.</h5>

                    <Row>
                        <Col sm="6">

                            <h2>
                                Needed Developer
                            </h2>
                            <h5>
                                So every year company need developer but how many company need a python
                                developer. If you want to find a job and haven't get a job i recommend you need
                                to know what company need what kind of python developer. in this picture let you
                                know what kind python developer need for company so you want to learn it and
                                hopefully get a job.You can see in the picture that in March 2019 that so many
                                company need a react developer so is very good thing you learn django framework
                                for develop you're website or learning about AWS (Amazon Web Services) a set of
                                Cloud Computing-based services for building applications. And by knowing what
                                kind company needed developer is very good thing to find out how many developer
                                they need so you can apply the job without worry that there is no job for
                                javascript developer, you can even think that there is no waste of time on
                                learning javascript. so learn javascript now little by little you can be a pro
                                programmer and find best suited job for you
                            </h5>

                        </Col>
                        <Col sm="6">
                            <div className="text-center">
                                <img src={pythonneed} width="90%"/>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}