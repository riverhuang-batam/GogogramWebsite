import React, {Component} from 'react'
import {Container, Jumbotron, Form, FormGroup, Label, Input, Button} from 'reactstrap'
import webdev from './webdevelopment1.jpg'
import whatsapp from './whatsapp.png'
import gmail from './gmail.png'

import webdesigndevelop from './webdesigndevelop.png'

export default class About extends Component{
    render(){
        return(
            <div>
                <Jumbotron fluid style={{backgroundImage:`url('${webdesigndevelop}')`, backgroundSize:'cover', padding:'17%'}}>
                </Jumbotron>
                <Container>
                <h2 className="text-center">About</h2>
                <h5>The reason i create this website is because there are many people don't know how to make program or application or become a programmer. By learning in this website you ready to start to become a programmer</h5>
                <h2 className="text-center">Question</h2>
                <h5>If you want to know new info about programming language that you want to learn just send message to me then i will add it in this website as soon as possible </h5>
                <Form action= "https://formspree.io/riverhuang011@gmail.com" method="POST">
                    <FormGroup>
                        <Label>Name:</Label>
                        <Input 
                        type="Text"
                        name="name"
                        placeholder="Name"/>
                    </FormGroup>
                    <FormGroup>
                        <Label>E-mail:</Label>
                        <Input
                        type="email"
                        name="email"
                        placeholder="E-mail"/>
                    </FormGroup>
                    <FormGroup>
                        <Label>Message:</Label>
                        <Input
                        type="textarea"
                        name="message"
                        placeholder="Message"/>
                    </FormGroup>
                    <Button color="success">Submit</Button>
                </Form>
                </Container>
            </div>
        )
    }
}