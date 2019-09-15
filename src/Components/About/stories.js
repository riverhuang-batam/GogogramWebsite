import React from 'react'
import {storiesOf} from '@storybook/react'
import About from './'

storiesOf('/Component/About', module)
.add('About',()=>{
    return(
        <About/>
    )
})