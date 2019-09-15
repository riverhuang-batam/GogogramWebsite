import React, {Component} from 'react'
import Navbar from './../../Components/Navbar'
import Jumbotron from './../../Components/Jumbotron'
import Programdef from './../../Components/Programdef'
import Jumbotronbottom from './../../Components/Jumbotronbottom'
import hexasgonwhite from './hexasgonwhite.jpg'
import hexasgonblack from './hexasgonblack.jpg'
export default class HomePage extends Component{
    render(){
        return(
            <div style={{backgroundImage:`url('${hexasgonblack}')`}}>
            <Navbar/>
            <Jumbotron/>
            <Programdef/>
            <Jumbotronbottom/>
            </div>
        )
    }
}