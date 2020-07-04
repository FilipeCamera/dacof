import React, { useState, useEffect } from "react";

import {
  Container,
  Scroll,
  Title,
  BoxAula,
  BoxAulaSala,
  BoxSala,
  TextSala,
  NumSala,
  BoxAulaText,
  TextTitle,
  TextSubTitle,
  TextHorario,
  TextSubHorario,
  BoxAulaAviso,
  TextAviso,
  BoxAviso,
  styles,
} from "./styles";

import { Dimensions } from "react-native";
import { SearchBar } from "react-native-elements";
import { api } from "../../api";
import { AntDesign } from "@expo/vector-icons";
import HeaderRedSearch from "../../components/HeaderRedSearch";
import ShimmerPlaceHolder from "react-native-shimmer-placeholder";

export default function Aulas({ navigation }) {
  const [aulas, setAulas] = useState([]);
  const [aulaFiltrada, setAulaFiltrada] = useState([]);
  const [aula, setAula] = useState("");
  const [visible, setVisible] = useState(false);

  function searchAula(textAula) {
    setAulaFiltrada(
      aulas.filter((i) =>
        i.titulo.toLowerCase().includes(textAula.toLowerCase())
      )
    );
  }
  useEffect(() => {
    async function loadAulas() {
      await api.get("/Aulas.json").then((resp) => {
        const aulasList = [];
        for (let key in resp.data) {
          aulasList.unshift({
            ...resp.data[key],
            id: key,
          });
        }
        setAulas(aulasList);
        setAulaFiltrada(aulasList);
        setVisible(true);
      });
    }
    loadAulas();
  }, []);
  return (
    <Container>
      <HeaderRedSearch navigation={navigation} />
      <Scroll contentContainerStyle={{ flexGrow: 1, alignItems: "center" }}>
        <SearchBar
          lightTheme
          placeholder="Pesquisar"
          value={aula}
          onChangeText={(e) => {
            searchAula(e);
            setAula(e);
          }}
          containerStyle={{
            width: Dimensions.get("screen").width,
            backgroundColor: "#F4F4F4",
          }}
          searchIcon={{ color: "#5B5B5B" }}
          inputContainerStyle={{
            backgroundColor: "#FFF",
            borderRadius: 20,
            height: 40,
          }}
          inputStyle={{ color: "#5B5B5B", fontFamily: "Cairo" }}
        />
        <Title>Horário de Aula</Title>
        {aulas.length ? (
          aulaFiltrada.map((item) => (
            <BoxAula style={styles.boxShadow} key={item.id}>
              <BoxAulaSala>
                <BoxSala>
                  <TextSala>Sala</TextSala>
                </BoxSala>
                <NumSala>{item.sala}</NumSala>
              </BoxAulaSala>
              <BoxAulaText>
                <TextTitle>{item.titulo}</TextTitle>
                <TextSubTitle>{item.subtitulo}</TextSubTitle>
                <TextHorario>Horários:</TextHorario>
                <TextSubHorario>{item.horario_um}</TextSubHorario>
                <TextSubHorario>{item.horario_dois}</TextSubHorario>
                <BoxAulaAviso>
                  <TextAviso>{item.msg_aviso}</TextAviso>
                  <BoxAviso aviso={item.aviso}>
                    {item.aviso == "aviso" ? (
                      <AntDesign
                        name="exclamationcircle"
                        size={28}
                        color="#F1CB42"
                      />
                    ) : null}
                    {item.aviso == "sem aula" ? (
                      <AntDesign name="closecircle" size={28} color="#FF5959" />
                    ) : null}
                    {item.aviso == "" ? (
                      <AntDesign name="checkcircle" size={28} color="#44AA3B" />
                    ) : null}
                  </BoxAviso>
                </BoxAulaAviso>
              </BoxAulaText>
            </BoxAula>
          ))
        ) : (
          <ShimmerPlaceHolder
            autoRun={true}
            visible={visible}
            style={{ width: 340, height: 170, borderRadius: 10 }}
          />
        )}
      </Scroll>
    </Container>
  );
}
