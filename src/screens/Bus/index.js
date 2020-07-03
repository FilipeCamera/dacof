import React from "react";

import {
  Container,
  Title,
  BoxBus,
  CardBus,
  Scroll,
  CardText,
  CardHText,
  BoxHeader,
  BoxHorario,
  CardSubText,
  styles,
} from "./styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import HeaderRed from "../../components/HeaderRed";
import dataRegional from "../../components/HorarioBus/Regional";
import dataVSA from '../../components/HorarioBus/VSA';
export default function Bus() {
  return (
    <Container>
      <HeaderRed />
      <Scroll
        contentContainerStyle={{
          flexGrow: 1,
          alignItems: "center",
          paddingBottom: 10,
        }}
        showsVerticalScrollIndicator={false}
      >
        <Title>Horário do Ônibus</Title>
        <BoxBus>
          <CardBus style={styles.boxShadow}>
            <BoxHeader>
              <CardText>COOSTAC</CardText>
              <MaterialCommunityIcons name="bus" size={24} color="#963132" />
            </BoxHeader>
          </CardBus>
          <CardBus style={styles.boxShadow}>
            <BoxHeader>
              <CardText>Regional</CardText>
              <MaterialCommunityIcons name="bus" size={24} color="#963132" />
            </BoxHeader>
            <BoxHorario>
              <CardSubText>Camaçari</CardSubText>
              {dataRegional.camacari.map(item => <CardHText key={item[0]}>{item.title}</CardHText>)}
            </BoxHorario>
            <BoxHorario>
              <CardSubText>Salvador</CardSubText>
              {dataRegional.salvador.map(item => <CardHText key={item[0]}>{item.title}</CardHText>)}
            </BoxHorario>
          </CardBus>
        </BoxBus>
        <BoxBus>
          <CardBus style={styles.boxShadow}>
            <BoxHeader>
              <CardText>VSA</CardText>
              <MaterialCommunityIcons name="bus" size={24} color="#963132" />
            </BoxHeader>
            <BoxHorario>
              <CardSubText>Seg - Sáb</CardSubText>
              {dataVSA.semana.map(item => <CardHText key={item[0]}>{item.title}</CardHText>)}
            </BoxHorario>
            <BoxHorario>
              <CardSubText>Domingo</CardSubText>
              {dataVSA.domingo.map(item => <CardHText key={item[0]}>{item.title}</CardHText>)}
            </BoxHorario>
          </CardBus>
          <CardBus style={styles.boxShadow}>
            <BoxHeader>
              <CardText>Cidade das Águas</CardText>
              <MaterialCommunityIcons name="bus" size={24} color="#963132" />
            </BoxHeader>
          </CardBus>
        </BoxBus>
      </Scroll>
    </Container>
  );
}
