import React from 'react'

import Home from '../screens/Home'
import Faculdade from '../screens/Faculdade'
import Aulas from '../screens/Aulas'
import Emails from '../screens/Emails'
import Links from '../screens/Links'
import Loja from '../screens/Loja'
import Eventos from '../screens/Eventos'
import Transparencia from '../screens/Transparencia'
import Bus from '../screens/Bus'

import {createDrawerNavigator} from '@react-navigation/drawer'

const Drawer = createDrawerNavigator()

export default function Drawers(){
    return(
        <Drawer.Navigator initialRouteName='Home'>
            <Drawer.Screen name='Home' component={Home}/>
            <Drawer.Screen name='Faculdade' component={Faculdade}/>
            <Drawer.Screen name='Aulas' component={Aulas}/>
            <Drawer.Screen name='Transparencia' component={Transparencia}/>
            <Drawer.Screen name='Emails' component={Emails}/>
            <Drawer.Screen name='Links' component={Links}/>
            <Drawer.Screen name='Loja' component={Loja}/>
            <Drawer.Screen name='Eventos' component={Eventos}/>
            <Drawer.Screen name='Bus' component={Bus}/>
        </Drawer.Navigator>
    )
}