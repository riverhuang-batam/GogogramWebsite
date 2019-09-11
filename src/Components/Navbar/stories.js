import React from 'react'
import {storiesOf} from '@storybook/react'
import Navbar from './'

storiesOf('Component/Navbar', module)
    .add('Navbar',()=>{
        return(
            <Navbar/>
        )
    })

