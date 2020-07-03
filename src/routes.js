import React from 'react'

import {NavigationContainer} from '@react-navigation/native'
import Stacks from './routes/Stack.routes'
import Drawers from './routes/Drawer.routes'

const Routes = () => (
    <NavigationContainer>
        <Stacks />
    </NavigationContainer>
)

export default Routes