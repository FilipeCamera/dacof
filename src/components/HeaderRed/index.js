import React from 'react'

import {FontAwesome} from '@expo/vector-icons'
import {Container, MenuButton, MenuImage, MenuText} from './styles'

export default function HeaderRed(){
    return(
        <Container>
            <MenuButton>
                <FontAwesome name='navicon' size={24} color='#FFF'/>
            </MenuButton>
            <MenuText>DACOF - UNEB - DIREITO</MenuText>
        </Container>
    )
}