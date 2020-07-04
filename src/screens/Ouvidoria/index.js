import React from "react";

import { Container, Title, BoxForm } from "./styles";
import HeaderRed from "../../components/HeaderRed";
import { Input, Button } from "react-native-elements";

export default function Ouvidoria({ navigation }) {
  return (
    <Container>
      <HeaderRed navigation={navigation} />
      <Title>Ouvidoria</Title>
      <BoxForm>
        <Input
          label="Nome"
          labelStyle={{
            fontFamily: "Cairo-Bold",
            color: "#4B4B4B",
            marginLeft: 10,
          }}
          textContentType="name"
          maxLength={80}
          inputContainerStyle={{
            borderWidth: 1,
            borderColor: "#5B5B5B",
            borderRadius: 10,
            backgroundColor: "#FFF",
            paddingLeft: 10,
            marginTop: 5,
          }}
        />
        <Input
          label="Deixe sua sugestão ou crítica"
          labelStyle={{
            fontFamily: "Cairo-Bold",
            color: "#4B4B4B",
            marginLeft: 10,
          }}
          maxLength={500}
          inputContainerStyle={{
            borderWidth: 1,
            borderColor: "#5B5B5B",
            borderRadius: 10,
            backgroundColor: "#FFF",
            padding: 10,
            marginTop: 5,
          }}
          inputStyle={{ fontFamily: "Cairo", fontSize: 14, color: "#4B4B4B" }}
          multiline={true}
          numberOfLines={5}
          textAlignVertical="top"
        />
      </BoxForm>
      <Button
        title="Enviar"
        titleStyle={{ fontFamily: "Cairo-Bold" }}
        buttonStyle={{
          width: 180,
          height: 40,
          borderRadius: 10,
          backgroundColor: "#5B5B5B",
        }}
      />
    </Container>
  );
}
