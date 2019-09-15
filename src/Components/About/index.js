import React, {Component} from 'react'
import {Container, Jumbotron} from 'reactstrap'
import webdev from './webdevelopment1.jpg'

export default class About extends Component{
    render(){
        return(
            <div>
                <Jumbotron style={{backgroundImage:`url('${webdev}')`, backgroundSize:'cover', padding:'18%'}}>

                </Jumbotron>
                <Container>
                <h5>the reason i create this website is because there are many people don't know how to make program or application or becaome a programmer</h5>
                </Container>
            </div>
        )
    }
}