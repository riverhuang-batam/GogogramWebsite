import React, {Component} from 'react'
import {
    Row,
    Col,
    Container,
    Card,
    CardImg,
    CardText,
    Jumbotron
} from 'reactstrap'
import python from './python.png'
import javascript from './javascript.png'
import go from './GO.png'
import csharp from './csharp.png'
import swift from './swift.png'
import learning from './learning.jpg'
import readylearn from './readylearn.png'
import javascriptlearn from './javascriptlearn.png'
import pythonlearn from './pythonlearn.jpg'
import introgogogram from './introgogogram.jpg'
import program from './program.jpg'
import whatisprogram from './whatisprogram.png'
export default class Programdef extends Component {
    render() {
        return (
            <div>
                <Container
                    style={{
                    backgroundColor: 'white'
                }}
                    className="mb-4 ">
                    <h1>Intro</h1>
                    <h5>GOGOGRAM is the website to help you learn about programming. we start from
                        basic so that you can be a pro programmer too in near future so get ready to
                        become a new programmer. Gogogram is gonna give many valuable lesson for you to
                        learn from many programming language even you already become a programmer
                        doesn't mean you can do everything but don't stop learning so you can do many
                        thing by learning programming</h5>

                    <Jumbotron
                        style={{
                        backgroundImage: `url(${program})`,
                        padding: '22%',
                        backgroundSize: 'cover',
                        position: 'relative'
                    }}></Jumbotron>
                    <h1 className=" mb-4">programming language</h1>
                    <Jumbotron
                        style={{
                        backgroundImage: `url(${whatisprogram})`,
                        padding: '20%',
                        backgroundSize: 'cover',
                        position: 'relative'
                    }}></Jumbotron>

                    <h5 className="mt-4 mb-4">A programming language is a vocabulary and set of grammatical rules for instructing a computer or computing device to perform specific tasks. The term programming language usually refers to high-level languages. so what programming language they are
                        Javascript, Python, Java, Golang, PhP, Swift, C++, C# and many more, but you
                        don't have to learn everything every programming language have their own work so
                        you just need to learn programming language you want like you're college
                        project, or for finding work, after you learn 1 programming language you need to
                        know where it will go? will it needed by company in the near future? Sometime is
                        very helpful if you know that. But what is important is never give up on
                        learning programming, learn and make your best program</h5>
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
                            <img src={csharp} width="75px"/>
                        </Col>
                        <Col className="text-center">
                            <h2>GO</h2>
                            <img src={go} width="80px"/>
                        </Col>
                        <Col className="text-center">
                            <h2>Swift</h2>
                            <img src={swift} width="70px" className="mt-2"/>
                        </Col>
                    </Row>
                    <div className="mt-4">
                        <h2>Why learn programming?</h2>
                    </div>
                    <img src={learning} width="100%" className="mt-4 mb-4"/>
                    <div>
                        <h5>First why you learn programprogramming? why you decide to learn it? is learn
                            programming hard? but don't worry in this website we gonna help you to learn
                            about programming and to make you become a developer or programmer. But first
                            you need to motivate yourself and always making app or website to make you
                            become a greater programmer</h5>
                    </div>
                    <h1>Ready?</h1>

                    <Jumbotron
                        style={{
                        backgroundImage: `url(${readylearn})`,
                        padding: '25%',
                        backgroundSize: 'cover',
                        position: 'relative'
                    }}></Jumbotron>
                    <h5>Do you ready to become a programmer so you can find a job or making your own
                        application so don't go any where and learn all the course in this website</h5>
                    <h1 className="mb-4">Lesson</h1>
                    <h5>Here is the lesson for you to ready become what programmer you want?</h5>
                    <Row>
                        <Col md="6">
                            <Card className="mb-4">
                                <CardImg top width="100%" src={javascriptlearn}/>
                                <CardText className="mt-4">
                                    <h4>
                                        Let's learn javascript
                                    </h4>
                                    <h5>Learn javascript so you can develop you're own website or learn react native
                                        to make you're own android app or ios app, so let's learn javascript</h5>
                                </CardText>
                            </Card>
                        </Col>
                        <Col md="6">
                            <Card className="mb-4">
                                <CardImg top width="100%" src={pythonlearn}/>
                                <CardText className="mt-4">
                                    <h4>
                                        Let's learn python
                                    </h4>
                                    <h5>Learn python so you can develop many thing you can develop you're website or
                                        making an AI that gonna be so good, so let's learn Python</h5>
                                </CardText>
                            </Card>
                        </Col>
                    </Row>
                </Container>

            </div>
        )
    }
}