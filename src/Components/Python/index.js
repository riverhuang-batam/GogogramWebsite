import React, {Component} from 'react'
import {Jumbotron} from 'reactstrap'
import python from './Python.jpg'

export default class Python extends Component{
    render(){
        return(
            <div>
                <Jumbotron style={{background:`url('${python}')`, backgroundSize:'cover', padding:'20%'}} className="text-center">
                    <h1 style={{color:'white'}}>Python</h1>
                </Jumbotron>
            </div>
        )
    }
}