import React from "react";

import { Container, Title, BoxEmails, NameTitle, TextEmail } from "./styles";
import { FlatList } from "react-native";
import HeaderRed from "../../components/HeaderRed";
import { data } from "../../components/Email";
export default function Emails({ navigation }) {
  const _renderItem = ({ item, index }) => (
    <BoxEmails key={index}>
      <NameTitle>{item.title}</NameTitle>
      <TextEmail>{item.email_um}</TextEmail>
      <TextEmail>{item.email_dois}</TextEmail>
      <TextEmail>{item.email_tres}</TextEmail>
    </BoxEmails>
  );
  return (
    <Container>
      <HeaderRed navigation={navigation} />
      <Title>E-mail</Title>
      <FlatList
        keyExtractor={(item) => item.title}
        style={{ width: "100%", padding: 10 }}
        data={data}
        renderItem={_renderItem}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  );
}
