import React, { useState } from "react";

import {
  Container,
  BoxButton,
  BoxApresentation,
  Title,
  styles,
} from "./styles";
import { Button } from "react-native-elements";
import HeaderRed from "../../components/HeaderRed";

export default function Faculdade({navigation}) {
  const [textPrimaryColor, setPrimaryTextColor] = useState("#FFF");
  const [textSecundaryColor, setSecundaryTextColor] = useState("#5B5B5B");
  const [colorPrimary, setColorPrimary] = useState("#9F3233");
  const [colorSecundary, setColorSecundary] = useState("#FFF");
  const [title, setTitle] = useState("História");

  return (
    <Container>
      <HeaderRed navigation={navigation}/>
      <BoxButton>
        <Button
          containerStyle={{ width: 100, height: 30, borderRadius: 15 }}
          buttonStyle={{
            width: 100,
            height: 30,
            borderRadius: 15,
            backgroundColor: `${colorPrimary}`,
          }}
          title="História"
          titleStyle={{
            fontFamily: "Cairo-Semibold",
            fontSize: 14,
            color: `${textPrimaryColor}`,
          }}
          raised
          onPress={() => {
            setColorPrimary("#9F3233");
            setPrimaryTextColor("#FFF");
            setColorSecundary("#FFF");
            setSecundaryTextColor("#5B5B5B");
            setTitle("História");
          }}
        />
        <Button
          containerStyle={{ width: 100, height: 30, borderRadius: 15 }}
          buttonStyle={{
            width: 100,
            height: 30,
            borderRadius: 15,
            backgroundColor: `${colorSecundary}`,
          }}
          title="Missão"
          titleStyle={{
            fontFamily: "Cairo-Semibold",
            fontSize: 14,
            color: `${textSecundaryColor}`,
          }}
          raised
          onPress={() => {
            setColorPrimary("#FFF");
            setPrimaryTextColor("#5B5B5B");
            setColorSecundary("#9F3233");
            setSecundaryTextColor("#FFF");
            setTitle("Missão");
          }}
        />
      </BoxButton>
      <BoxApresentation style={styles.boxShadow}>
        <Title>{title}</Title>
      </BoxApresentation>
    </Container>
  );
}
