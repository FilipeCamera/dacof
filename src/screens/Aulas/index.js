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

import { api } from "../../api";
import { AntDesign } from "@expo/vector-icons";
import HeaderRedSearch from "../../components/HeaderRedSearch";

export default function Aulas() {
  const [aulas, setAulas] = useState([]);

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
      });
    }
    loadAulas();
  }, []);
  return (
    <Container>
      <HeaderRedSearch />
      <Scroll contentContainerStyle={{ flexGrow: 1, alignItems: "center" }}>
        <Title>Horário de Aula</Title>
        {aulas.map((item) => (
          <BoxAula style={styles.boxShadow} key={item.id}>
            <BoxAulaSala>
              <BoxSala>
                <TextSala>Sala</TextSala>
              </BoxSala>
              <NumSala>001</NumSala>
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
        ))}
      </Scroll>
    </Container>
  );
}
