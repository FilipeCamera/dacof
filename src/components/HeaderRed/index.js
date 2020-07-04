import React from 'react'

import {FontAwesome} from '@expo/vector-icons'
import {Container, MenuButton, MenuText} from './styles'

export default function HeaderRed({navigation}){
    return(
        <Container>
            <MenuButton onPress={() => navigation.navigate('Home')}>
                <FontAwesome name='arrow-left' size={22} color='#FFF'/>
            </MenuButton>
            <MenuText>DACOF - UNEB - DIREITO</MenuText>
        </Container>
    )
}