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
import Informes from "../screens/Informes";
import Ouvidoria from "../screens/Ouvidoria";
import Cadernos from "../screens/Cadernos";

import { createDrawerNavigator } from "@react-navigation/drawer";

const Drawer = createDrawerNavigator();

export default function Drawers({ route }) {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContentOptions={{
        activeBackgroundColor: "#FF9090",
        activeTintColor: "#9F3233",
        labelStyle: {
            fontFamily: 'Cairo-Semibold',
        }
      }}
    >
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{ title: "Tela Inicial" }}
      />
      <Drawer.Screen
        name="Faculdade"
        component={Faculdade}
        options={{ title: "A Faculdade" }}
      />
      <Drawer.Screen
        name="Aulas"
        component={Aulas}
        options={{ title: "Horário de Aula" }}
      />
      <Drawer.Screen
        name="Bus"
        component={Bus}
        options={{ title: "Horário do Ônibus" }}
      />
      <Drawer.Screen
        name="Links"
        component={Links}
        options={{ title: "Links" }}
      />
      <Drawer.Screen
        name="Informes"
        component={Informes}
        options={{ title: "Informes" }}
      />
      <Drawer.Screen
        name="Transparencia"
        component={Transparencia}
        options={{ title: "Transparência" }}
      />
      <Drawer.Screen
        name="Ouvidoria"
        component={Ouvidoria}
        options={{ title: "Ouvidoria" }}
      />
      <Drawer.Screen name="Loja" component={Loja} options={{ title: "Loja" }} />
      <Drawer.Screen
        name="Eventos"
        component={Eventos}
        options={{ title: "Eventos Universitários" }}
      />
      <Drawer.Screen
        name="Cadernos"
        component={Cadernos}
        options={{ title: "Cadernos Universitários" }}
      />
      <Drawer.Screen
        name="Emails"
        component={Emails}
        options={{ title: "E-mail" }}
      />
    </Drawer.Navigator>
  );
}
