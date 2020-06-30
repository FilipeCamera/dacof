import React from 'react'

import {FontAwesome} from '@expo/vector-icons'
import {Container, MenuButton, MenuImage, MenuText} from './styles'

export default function Header(){
    return(
        <Container>
            <MenuButton>
                <FontAwesome name='navicon' size={24} color='#9F3233'/>
            </MenuButton>
            <MenuText>DACOF - UNEB - DIREITO</MenuText>
        </Container>
    )
}