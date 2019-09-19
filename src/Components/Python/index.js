import React, {Component} from 'react'
import {Jumbotron} from 'reactstrap'
import python from './Python.jpg'

export default class Python extends Component{
    render(){
        return(
            <div>
                <Jumbotron fluid style={{background:`url('${python}')`, backgroundSize:'cover', padding:'20%'}}>
                <div style={{backgroundColor:'black', position:'absolute', top:'0',left:'0',bottom:'0',right:'0', opacity:'0.3'}}></div>
                    <h1 style={{color:'white'}}>Python</h1>
                </Jumbotron>
                <h5>so what can we do by learning python?</h5>
                <h5>we can learn about machine learning for making AI(Artificial Inteligence)</h5>
                <h5>Python for Web Development</h5>
                <h5>Scientific and Numeric Computing</h5>
                <h5>Function Decorators Allow Enhanced Functionality</h5>
                <h5>Machine Learning (ML)</h5>
                <h5>Browser Automation</h5>
                <h5>Python Makes Robotics Possible</h5>
            </div>
        )
    }
}