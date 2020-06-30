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

import {createStackNavigator} from '@react-navigation/stack'

const Stack = createStackNavigator()

export default function Stacks(){
    return(
        <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen name='Home' component={Home} options={{headerShown: false}}/>
            <Stack.Screen name='Faculdade' component={Faculdade}/>
            <Stack.Screen name='Aulas' component={Aulas}/>
            <Stack.Screen name='Transparencia' component={Transparencia}/>
            <Stack.Screen name='Emails' component={Emails}/>
            <Stack.Screen name='Links' component={Links}/>
            <Stack.Screen name='Loja' component={Loja}/>
            <Stack.Screen name='Eventos' component={Eventos}/>
            <Stack.Screen name='Bus' component={Bus}/>
        </Stack.Navigator>
    )
}