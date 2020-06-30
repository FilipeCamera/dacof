import React from 'react'

import {Container, MenuButton, MenuImage, MenuText} from './styles'

export default function Header(){
    return(
        <Container>
            <MenuButton>
                <MenuImage source={require('../../assets/MenuButton.png')}/>
            </MenuButton>
            <MenuText>DACOF - UNEB - DIREITO</MenuText>
        </Container>
    )
}