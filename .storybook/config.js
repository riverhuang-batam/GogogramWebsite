import {configure} from '@storybook/react'
import 'bootstrap/dist/css/bootstrap.min.css'


const req = require.context('./../src',true, /stories.js$/)

function loadstories() {
    req.keys().forEach(filename=>{
        req(filename)
    })
}
configure(loadstories, module)