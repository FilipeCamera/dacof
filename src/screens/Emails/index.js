import React from 'react'

import {Container, Title} from './styles'
import HeaderRed from '../../components/HeaderRed'

export default function Emails({navigation}){
    return(
        <Container>
            <HeaderRed navigation={navigation}/>
            <Title>E-mail</Title>
        </Container>
    )
}