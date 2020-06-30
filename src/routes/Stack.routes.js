import React from "react";

import Home from "../screens/Home";
import Faculdade from "../screens/Faculdade";
import Aulas from "../screens/Aulas";
import Emails from "../screens/Emails";
import Links from "../screens/Links";
import Loja from "../screens/Loja";
import Eventos from "../screens/Eventos";
import Transparencia from "../screens/Transparencia";
import Bus from "../screens/Bus";

import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function Stacks() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
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
    </Stack.Navigator>
  );
}
