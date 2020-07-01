import React from "react";

import { Container, Title, BoxBus, CardBus, Scroll, CardText, BoxHeader, styles } from "./styles";
import {MaterialCommunityIcons} from '@expo/vector-icons';
import HeaderRed from "../../components/HeaderRed";
export default function Bus() {
  return (
    <Container>
      <HeaderRed />
      <Scroll
        contentContainerStyle={{ flexGrow: 1, alignItems: "center", paddingBottom: 10 }}
        showsVerticalScrollIndicator={false}
      >
        <Title>Horário do Ônibus</Title>
        <BoxBus>
          <CardBus style={styles.boxShadow}>
            <BoxHeader>
                <CardText>COOSTAC</CardText>
                <MaterialCommunityIcons name='bus' size={24} color='#963132'/>
            </BoxHeader>
          </CardBus>
          <CardBus style={styles.boxShadow}>
            <BoxHeader>
                <CardText>Regional</CardText>
                <MaterialCommunityIcons name='bus' size={24} color='#963132'/>
            </BoxHeader>
          </CardBus>
        </BoxBus>
        <BoxBus>
          <CardBus style={styles.boxShadow}>
            <BoxHeader>
                <CardText>VSA</CardText>
                <MaterialCommunityIcons name='bus' size={24} color='#963132'/>
            </BoxHeader>
          </CardBus>
          <CardBus style={styles.boxShadow}>
            <BoxHeader>
                <CardText>Cidade das Águas</CardText>
                <MaterialCommunityIcons name='bus' size={24} color='#963132'/>
            </BoxHeader>
          </CardBus>
        </BoxBus>
      </Scroll>
    </Container>
  );
}
