import React from "react";

import { Linking } from "react-native";

import { Button } from "react-native-elements";
import {
  Container,
  Title,
  BoxLink,
  Scroll,
  LinkTextBox,
  LinkText,
  BoxGroup,
  TextGroup,
  styles,
} from "./styles";
import HeaderRed from "../../components/HeaderRed";

export default function Links({navigation}) {
  return (
    <Container>
      <HeaderRed navigation={navigation}/>
      <Scroll
        contentContainerStyle={{
          flexGrow: 1,
          alignItems: "center",
          paddingBottom: 10,
        }}
        showsVerticalScrollIndicator={false}
      >
        <Title>Links</Title>
        <BoxLink style={styles.boxShadow}>
          <LinkTextBox>
            <LinkText>Biblioteca Online</LinkText>
            <Button
              buttonStyle={{
                width: 30,
                height: 30,
                borderRadius: 15,
                backgroundColor: "#9F3233",
              }}
              title="Ir"
              titleStyle={{ fontFamily: "Cairo-Bold", fontSize: 15 }}
              onPress={() =>
                Linking.openURL(
                  "https://drive.google.com/drive/u/1/folders/1t6gtOYVJxX7qp2uNPxQme853G_vIGdrP"
                )
              }
            />
          </LinkTextBox>
          <LinkTextBox>
            <LinkText>Editais</LinkText>
            <Button
              buttonStyle={{
                width: 30,
                height: 30,
                borderRadius: 15,
                backgroundColor: "#9F3233",
              }}
              title="Ir"
              titleStyle={{ fontFamily: "Cairo-Bold", fontSize: 15 }}
              onPress={() =>
                Linking.openURL(
                  "https://drive.google.com/drive/u/1/folders/1PIIo31RMlPcgAYE47eXpueAk5fKdVTFP"
                )
              }
            />
          </LinkTextBox>
          <LinkTextBox>
            <LinkText>Calendário Estudantil</LinkText>
            <Button
              buttonStyle={{
                width: 30,
                height: 30,
                borderRadius: 15,
                backgroundColor: "#9F3233",
              }}
              title="Ir"
              titleStyle={{ fontFamily: "Cairo-Bold", fontSize: 15 }}
            />
          </LinkTextBox>
          <LinkTextBox>
            <LinkText>Ementário das Disciplinas</LinkText>
            <Button
              buttonStyle={{
                width: 30,
                height: 30,
                borderRadius: 15,
                backgroundColor: "#9F3233",
              }}
              title="Ir"
              titleStyle={{ fontFamily: "Cairo-Bold", fontSize: 15 }}
            />
          </LinkTextBox>
          <LinkTextBox>
            <LinkText>Enquetes</LinkText>
            <Button
              buttonStyle={{
                width: 30,
                height: 30,
                borderRadius: 15,
                backgroundColor: "#9F3233",
              }}
              title="Ir"
              titleStyle={{ fontFamily: "Cairo-Bold", fontSize: 15 }}
            />
          </LinkTextBox>
          <LinkTextBox>
            <LinkText>ACC</LinkText>
            <Button
              buttonStyle={{
                width: 30,
                height: 30,
                borderRadius: 15,
                backgroundColor: "#9F3233",
              }}
              title="Ir"
              titleStyle={{ fontFamily: "Cairo-Bold", fontSize: 15 }}
              onPress={() => Linking.openURL('https://drive.google.com/drive/u/1/folders/1FsnMVpt2WnAStPZ56i8JJHFnqPggmzul')}
            />
          </LinkTextBox>
          <BoxGroup>
            <TextGroup>Grupos de Whatsapp</TextGroup>
            <LinkTextBox>
              <LinkText>- Semestre 1</LinkText>
              <Button
                buttonStyle={{
                  width: 30,
                  height: 30,
                  borderRadius: 15,
                  backgroundColor: "#9F3233",
                }}
                title="Ir"
                titleStyle={{ fontFamily: "Cairo-Bold", fontSize: 15 }}
              />
            </LinkTextBox>
            <LinkTextBox>
              <LinkText>- Semestre 2</LinkText>
              <Button
                buttonStyle={{
                  width: 30,
                  height: 30,
                  borderRadius: 15,
                  backgroundColor: "#9F3233",
                }}
                title="Ir"
                titleStyle={{ fontFamily: "Cairo-Bold", fontSize: 15 }}
              />
            </LinkTextBox>
            <LinkTextBox>
              <LinkText>- Semestre 3</LinkText>
              <Button
                buttonStyle={{
                  width: 30,
                  height: 30,
                  borderRadius: 15,
                  backgroundColor: "#9F3233",
                }}
                title="Ir"
                titleStyle={{ fontFamily: "Cairo-Bold", fontSize: 15 }}
              />
            </LinkTextBox>
            <LinkTextBox>
              <LinkText>- Semestre 4</LinkText>
              <Button
                buttonStyle={{
                  width: 30,
                  height: 30,
                  borderRadius: 15,
                  backgroundColor: "#9F3233",
                }}
                title="Ir"
                titleStyle={{ fontFamily: "Cairo-Bold", fontSize: 15 }}
              />
            </LinkTextBox>
            <LinkTextBox>
              <LinkText>- Semestre 5</LinkText>
              <Button
                buttonStyle={{
                  width: 30,
                  height: 30,
                  borderRadius: 15,
                  backgroundColor: "#9F3233",
                }}
                title="Ir"
                titleStyle={{ fontFamily: "Cairo-Bold", fontSize: 15 }}
              />
            </LinkTextBox>
            <LinkTextBox>
              <LinkText>- Semestre 6</LinkText>
              <Button
                buttonStyle={{
                  width: 30,
                  height: 30,
                  borderRadius: 15,
                  backgroundColor: "#9F3233",
                }}
                title="Ir"
                titleStyle={{ fontFamily: "Cairo-Bold", fontSize: 15 }}
              />
            </LinkTextBox>
            <LinkTextBox>
              <LinkText>- Semestre 7</LinkText>
              <Button
                buttonStyle={{
                  width: 30,
                  height: 30,
                  borderRadius: 15,
                  backgroundColor: "#9F3233",
                }}
                title="Ir"
                titleStyle={{ fontFamily: "Cairo-Bold", fontSize: 15 }}
              />
            </LinkTextBox>
            <LinkTextBox>
              <LinkText>- Semestre 8</LinkText>
              <Button
                buttonStyle={{
                  width: 30,
                  height: 30,
                  borderRadius: 15,
                  backgroundColor: "#9F3233",
                }}
                title="Ir"
                titleStyle={{ fontFamily: "Cairo-Bold", fontSize: 15 }}
              />
            </LinkTextBox>
            <LinkTextBox>
              <LinkText>- Semestre 9</LinkText>
              <Button
                buttonStyle={{
                  width: 30,
                  height: 30,
                  borderRadius: 15,
                  backgroundColor: "#9F3233",
                }}
                title="Ir"
                titleStyle={{ fontFamily: "Cairo-Bold", fontSize: 15 }}
              />
            </LinkTextBox>
            <LinkTextBox>
              <LinkText>- Semestre 10</LinkText>
              <Button
                buttonStyle={{
                  width: 30,
                  height: 30,
                  borderRadius: 15,
                  backgroundColor: "#9F3233",
                }}
                title="Ir"
                titleStyle={{ fontFamily: "Cairo-Bold", fontSize: 15 }}
              />
            </LinkTextBox>
          </BoxGroup>
        </BoxLink>
      </Scroll>
    </Container>
  );
}
