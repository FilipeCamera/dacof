import React from 'react'

import {FontAwesome} from '@expo/vector-icons'
import {Container, MenuButton, MenuText} from './styles'

export default function HeaderRedSearch(){
    return(
        <Container>
            <MenuButton>
                <FontAwesome name='navicon' size={24} color='#FFF'/>
            </MenuButton>
            <MenuText>DACOF - UNEB - DIREITO</MenuText>
            <MenuButton>
                <FontAwesome name='search' size={22} color='#FFF'/>
            </MenuButton>
        </Container>
    )
}