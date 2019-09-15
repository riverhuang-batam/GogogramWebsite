import React, {Component} from 'react'
import Navbar from './../../Components/Navbar'
import Jumbotron from './../../Components/Jumbotron'
import Programdef from './../../Components/Programdef'
import Jumbotronbottom from './../../Components/Jumbotronbottom'
export default class HomePage extends Component{
    render(){
        return(
            <div>
            <Navbar/>
            <Jumbotron/>
            <Programdef/>
            <Jumbotronbottom/>
            </div>
        )
    }
}