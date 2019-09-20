import React, {Component} from 'react'
import {Container, Jumbotron, Form, FormGroup, Label, Input, Button} from 'reactstrap'
import webdev from './webdevelopment1.jpg'

export default class About extends Component{
    render(){
        return(
            <div>
                <Jumbotron style={{backgroundImage:`url('${webdev}')`, backgroundSize:'cover', padding:'18%'}}>

                </Jumbotron>
                <Container>
                <h5>the reason i create this website is because there are many people don't know how to make program or application or become a programmer. By learning in this website you ready to start to become a programmer</h5>
                <h5>if you want to know new info about programming language that you want to learn just send message to me then i will add it in this website as soon as possible </h5>
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
                    <Button>Submit</Button>
                </Form>
                
                </Container>
            </div>
        )
    }
}