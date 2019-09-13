import React from 'react'
import {storiesOf} from '@storybook/react'
import Jumbotron from './'

storiesOf('Component/Jumbotron', module)
    .add('Jumbotron',()=>{
        return(
            <Jumbotron/>
        )
    })

