import React from "react";

import { Container } from "./styles";
import HeaderRed from "../../components/HeaderRed";

export default function Eventos({navigation}) {
  return (
    <Container>
      <HeaderRed navigation={navigation}/>
    </Container>
  );
}
