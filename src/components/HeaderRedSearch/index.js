import React from 'react'

import {FontAwesome} from '@expo/vector-icons'
import {Container, MenuButton, MenuText} from './styles'

export default function HeaderRedSearch(){
    return(
        <Container>
            <MenuText>DACOF - UNEB - DIREITO</MenuText>
            <MenuButton>
                <FontAwesome name='search' size={20} color='#FFF'/>
            </MenuButton>
        </Container>
    )
}