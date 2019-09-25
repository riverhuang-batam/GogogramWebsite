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

                    <h5 className="mt-2">On the picture is the javascript framework you can learn and use but the
                        main reason what is javascript and why use it? A software framework is an
                        abstraction in which software providing generic functionality can be selectively
                        changed by additional user-written code. JavaScript framework is an application
                        framework written in JavaScript where the programmers can manipulate the
                        functions and use them for their convenience. Frameworks are more adaptable for
                        the designing of websites and hence, they are preferred by most of the website
                        developers. JavaScript frameworks are a type of tool that makes working with
                        JavaScript easier and smoother. These frameworks also make it possible for the
                        programmer to code the application as a device responsive. This responsiveness
                        is yet another reason why the JavaScript frameworks are quite popular when it
                        comes to the question of using a high-level machine language. Let’s have a look
                        at the best JS Frameworks in 2019.
                    </h5>
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

                            <h1>
                                Javascript Needed Developer
                            </h1>
                            <h5>
                                So every year company need developer but how many company need a javascript
                                developer. If you want to find a job and haven't get a job i recommend you need
                                to know what company need what kind of javascript developer. in this picture let
                                you know what kind javascript developer need for company 2019. so you want to
                                learn it and hopefully get a job or build own application. You can see in the
                                picture that in April 2019 that so many company need a react developer so is
                                very good thing you learn react JS for web development or react native mobile
                                development or you can learn Angular Framework is the second highest needed
                                developer for company that still want angular . And by knowing what kind
                                company needed developer is very good thing to find out how many developer they
                                need so you can apply the job without worry that there is no job for javascript
                                developer, you can even think that there is no waste of time on learning
                                javascript. so learn javascript now little by little you can be a pro programmer
                                and find best suited job for you
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