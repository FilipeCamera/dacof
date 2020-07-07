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

import { MaterialCommunityIcons } from "@expo/vector-icons";

import { createDrawerNavigator } from "@react-navigation/drawer";

const Drawer = createDrawerNavigator();

export default function Drawers() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContentOptions={{
        activeBackgroundColor: "#751D1E",
        activeTintColor: "#FFF",
        labelStyle: {
          fontFamily: "Cairo-Semibold",
        },
        inactiveTintColor: "#FFF",
        contentContainerStyle: {
          backgroundColor: "#9F3233",
        },
      }}
    >
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          title: "Tela Inicial",
          drawerIcon: () => (
            <MaterialCommunityIcons name="home" size={24} color="#FFF" />
          ),
        }}
      />
      <Drawer.Screen
        name="Faculdade"
        component={Faculdade}
        options={{
          title: "A Faculdade",
          drawerIcon: () => (
            <MaterialCommunityIcons name="school" size={24} color="#FFF" />
          ),
        }}
      />
      <Drawer.Screen
        name="Aulas"
        component={Aulas}
        options={{
          title: "Horário de Aula",
          drawerIcon: () => (
            <MaterialCommunityIcons name="alarm-bell" size={24} color="#FFF" />
          ),
        }}
      />
      <Drawer.Screen
        name="Bus"
        component={Bus}
        options={{
          title: "Horário do Ônibus",
          drawerIcon: () => (
            <MaterialCommunityIcons name="bus-clock" size={24} color="#FFF" />
          ),
        }}
      />
      <Drawer.Screen
        name="Links"
        component={Links}
        options={{
          title: "Links",
          drawerIcon: () => (
            <MaterialCommunityIcons
              name="link-variant"
              size={24}
              color="#FFF"
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Informes"
        component={Informes}
        options={{
          title: "Informes",
          drawerIcon: () => (
            <MaterialCommunityIcons
              name="information-variant"
              size={24}
              color="#FFF"
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Transparencia"
        component={Transparencia}
        options={{
          title: "Transparência",
          drawerIcon: () => (
            <MaterialCommunityIcons name="cash" size={24} color="#FFF" />
          ),
        }}
      />
      <Drawer.Screen
        name="Ouvidoria"
        component={Ouvidoria}
        options={{
          title: "Ouvidoria",
          drawerIcon: () => (
            <MaterialCommunityIcons name="wechat" size={24} color="#FFF" />
          ),
        }}
      />
      <Drawer.Screen
        name="Loja"
        component={Loja}
        options={{
          title: "Loja",
          drawerIcon: () => (
            <MaterialCommunityIcons name="store" size={24} color="#FFF" />
          ),
        }}
      />
      <Drawer.Screen
        name="Eventos"
        component={Eventos}
        options={{
          title: "Eventos Universitários",
          drawerIcon: () => (
            <MaterialCommunityIcons name="calendar" size={24} color="#FFF" />
          ),
        }}
      />
      <Drawer.Screen
        name="Cadernos"
        component={Cadernos}
        options={{
          title: "Cadernos Universitários",
          drawerIcon: () => (
            <MaterialCommunityIcons name="book" size={24} color="#FFF" />
          ),
        }}
      />
      <Drawer.Screen
        name="Emails"
        component={Emails}
        options={{
          title: "E-mail",
          drawerIcon: () => (
            <MaterialCommunityIcons name="email" size={24} color="#FFF" />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}
