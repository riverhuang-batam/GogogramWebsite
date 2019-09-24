import React, {Component} from 'react';
import {Button, Jumbotron, Container} from 'reactstrap';
import allprogramming from './allprogramming.jpg'
import fullstack from './fullstack.jpg'
import fullstackweb from './fullstackweb.jpg'
export default class AppJumbotron extends Component{
    render(){
        return(
            <div>
            <Jumbotron fluid style={{backgroundImage:`url(${fullstackweb})`, backgroundSize: 'cover', position:'relative', padding:'24%'}}>
                
            </Jumbotron>

            </div>
        )
    }
}