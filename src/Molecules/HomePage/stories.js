import React from 'react'
import {storiesOf} from '@storybook/react'
import HomePage from '/'
storiesOf('Component/HomePage',(module))
    .add('HomePage',()=>{
        return(
            <HomePage/>
        )
    })