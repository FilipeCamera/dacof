import React from "react";

import Faculdade from "../screens/Faculdade";
import Aulas from "../screens/Aulas";
import Emails from "../screens/Emails";
import Links from "../screens/Links";
import Loja from "../screens/Loja";
import Eventos from "../screens/Eventos";
import Transparencia from "../screens/Transparencia";
import Bus from "../screens/Bus";
import Informes from "../screens/Informes";
import Ouvidoria from "../screens/Ouvidoria";
import Cadernos from "../screens/Cadernos";

import { createStackNavigator } from "@react-navigation/stack";
import Drawers from "./Drawer.routes";

const Stack = createStackNavigator();

export default function Stacks() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Drawers}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Faculdade"
        component={Faculdade}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Aulas"
        component={Aulas}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Transparencia"
        component={Transparencia}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Emails"
        component={Emails}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Links"
        component={Links}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Loja"
        component={Loja}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Eventos"
        component={Eventos}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Bus"
        component={Bus}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Ouvidoria"
        component={Ouvidoria}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Cadernos"
        component={Cadernos}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Informes"
        component={Informes}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
