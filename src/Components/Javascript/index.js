import React, {Component} from 'react'
import {
    Button,
    Jumbotron,
    Container,
    Row,
    Col,
    Card,
    CardImg
} from 'reactstrap'
import webdevelopment from './webdevelopment.jpg'
import "react-image-gallery/styles/css/image-gallery.css"
import ImageGallery from 'react-image-gallery'
import wlpp1 from './wlpp1.jpg'
import wlpp2 from './wlpp2.png'
import wlpp3 from './wlpp3.jpg'
import wlpp4 from './wlpp4.jpg'
import Mern from './Mern.jpg'
import javascriptsallary from './javascriptsallary.png'
import javascriptframework from './javascriptframework.jpg'
import javascriptneed from './javascriptneed.jpg'
export default class javascript extends Component {
    render() {
        const images = [
            {
                original: wlpp1,
                thumbnail: wlpp1
            }, {
                original: wlpp2,
                thumbnail: wlpp2
            }, {
                original: wlpp3,
                thumbnail: wlpp3
            }, {
                original: wlpp4,
                thumbnail: wlpp4
            }
        ]
        let test = `what we can do by using javascript: \n
        JavaScript is the Programming Language for the Web

        JavaScript can update and change both HTML and CSS

        JavaScript can calculate, manipulate and validate data

        but before learning javascript you must learning HTML and CSS for the UI(User Interface)
        by learning it all you can even make you own website`
        return (
            <div>
                <Jumbotron
                    fluid
                    style={{
                    backgroundImage: `url('${Mern}')`,
                    backgroundSize: 'cover',
                    padding: '12%',
                    position: 'relative'
                }}></Jumbotron>

                <Container className="mt-4">
                    <h1>Intro what is Javascript</h1>
                    <h5>
                        {test}
                    </h5>
                    <h5>JavaScript allows you to build interactive websites. JavaScript has become
                        an essential web technology along with HTML and CSS, as most browsers implement
                        JavaScript. Thus, You must learn JavaScript if you want to get into web
                        development, and you must learn it well if you're planning on being a front-end
                        developer or on using JavaScript for backend development. Furthermore,
                        JavaScript usage has now extended to mobile app development, desktop app
                        development, and game development. All in all, it has exploded in popularity and
                        is now a very useful skill to learn.
                    </h5>
                    <h1>Example website UI</h1>
                        <h5>this is the website template that people make by using HTML, CSS, and Javascript</h5>
                    
                    <div className="mt-4">
                        <ImageGallery items={images}/>
                    </div>
                    <h1>javascript Framework</h1>
                    <img src={javascriptframework} width="100%"/>

                    <h5>On the picture is the python framework you can learn and use for you're
                        project even in work sometime you will use one of those framework for you're
                        project. So is a good thing to learn a framework</h5>
                    <h1>Javascript Salary</h1>

                    <img src={javascriptsallary} width="100%"/>
                    <h5>
                        With more and more businesses moving online, demand for JavaScript developers
                        has been rocketing. JavaScript is also the most demanded programming skill at
                        Angel List. If you want to use JavaScript for backend development, the average
                        salary in the US for Node.js developers is about $98,962.
                    </h5>
                    <Row>
                        <Col sm="6">

                            <h2>
                                Needed Developer
                            </h2>
                            <h5>
                                So every year company need developer but how many company need a python
                                developer. If you want to find a job and haven't get a job i recomend you need
                                to know what company need what kind of python developer. in this picture let you
                                know what kind python developer need for company so you want to learn it and
                                hopefully get a job.
                            </h5>

                        </Col>
                        <Col sm="6">
                            <div className="text-center">
                                <img src={javascriptneed} width="90%"/>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}