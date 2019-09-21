import React, {Component} from 'react'
import Jumbotron from './../Jumbotron'
import Programdef from './../Programdef' 

export default class Home extends Component {
    render(){
        return(
            <div>
                <Jumbotron/>
                <Programdef/>
            </div>
        )
    }
}