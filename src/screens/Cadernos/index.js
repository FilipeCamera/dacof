import React from 'react'

import {Container, Title} from './styles'
import HeaderRed from '../../components/HeaderRed'

export default function Cadernos({navigation}){
    return(
        <Container>
            <HeaderRed navigation={navigation}/>
            <Title>Cadernos Universitários</Title>
        </Container>
    )
}