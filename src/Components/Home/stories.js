import React from 'react'
import {storiesOf} from '@storybook/react'
import Home from '/'
storiesOf('Component/Home',module)
    .add('Home',()=>{
        return(
            <Home/>
        )
    })