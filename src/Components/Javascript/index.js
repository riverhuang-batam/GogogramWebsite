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
                <Jumbotron fluid
                    style={{
                    backgroundImage: `url('${Mern}')`,
                    backgroundSize: 'cover',
                    padding: '12%',
                    position: 'relative'
                }}>
                </Jumbotron>

                <Container className="text-center mt-4">
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
                    <div className="mt-4">
                        <ImageGallery items={images}/>
                    </div>
                    <div className="mt-4">
                        this is the website template that people make by using HTML, CSS, and Javascript
                    </div>
                    <Card></Card>
                    <Card></Card>
                    <h1>javascript Framework</h1>
                    <img src={javascriptframework} width="100%"/>

                    <h1>Career Opportunities</h1>

                    <img src={javascriptsallary} width="100%"/>

                    <h1>Javascript Need</h1>
                    <img src={javascriptneed} width="50%" className="text-center"/>
                </Container>
            </div>
        )
    }
}