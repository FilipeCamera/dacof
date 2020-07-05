import React from "react";

import {
  Container,
  Title,
  BoxInforme,
  Scroll,
  HeaderInforme,
  BodyInforme,
  Imagem,
  TitleInforme,
  DescInforme,
  BoxData,
  TitleData,
  DescData,
  styles,
} from "./styles";
import HeaderRed from "../../components/HeaderRed";

export default function Eventos({ navigation }) {
  return (
    <Container>
      <HeaderRed navigation={navigation} />
      <Scroll
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1, alignItems: "center" }}
      >
        <Title>Eventos Universitários</Title>
        <BoxInforme style={styles.boxShadow}>
          <HeaderInforme>
            <Imagem source={require("../../assets/background.jpg")} />
          </HeaderInforme>
          <BodyInforme>
            <TitleInforme>Campeonato</TitleInforme>
            <DescInforme>O campeonato de jogos é feito a cada ano.</DescInforme>
            <BoxData>
                <TitleData>Data:</TitleData>
                <DescData>20/07/2020</DescData>
            </BoxData>
          </BodyInforme>
        </BoxInforme>
      </Scroll>
    </Container>
  );
}

