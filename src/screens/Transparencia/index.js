import React, { useState, useEffect } from "react";

import { Dimensions } from "react-native";
import { Button } from "react-native-elements";
import { AntDesign } from "@expo/vector-icons";
import {
  Container,
  Title,
  BoxButton,
  BoxHeaderButton,
  TitleButton,
  BoxBodyButton,
  TextBodyBlack,
  TextBodyBlackBold,
  TextBodyRed,
  TextBodyRedBold,
  Scroll,
  Subtitle,
} from "./styles";
import { LineChart } from "react-native-chart-kit";
import ShimmerPlaceHolder from "react-native-shimmer-placeholder";
import HeaderRed from "../../components/HeaderRed";
import { api } from "../../api";

export default function Transparencia({ navigation }) {
  const [dados, setDados] = useState([]);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    async function loadValores() {
      await api.get("/Transparencia.json").then((resp) => {
        const dadosList = [];
        for (let key in resp.data) {
          dadosList.unshift({
            ...resp.data[key],
            id: key,
          });
        }
        setDados(dadosList);
      });
    }
    loadValores();
    setVisible(true);
  }, []);
  return (
    <Container>
      <HeaderRed navigation={navigation} />
      <Scroll
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1, alignItems: "center" }}
      >
        <Title>Transparência</Title>
        <BoxButton>
          {dados.map((item) => {
            return (
              <ShimmerPlaceHolder
                autoRun={true}
                visible={visible}
                style={{
                  height: 150,
                  width: Dimensions.get("screen").width - 20,
                }}
              >
                <Button
                  icon={
                    <BoxButton key={item.id}>
                      <BoxHeaderButton>
                        <TitleButton>{item.mes}</TitleButton>
                        <AntDesign name="linechart" size={24} color="#963132" />
                      </BoxHeaderButton>
                      <BoxBodyButton>
                        <TextBodyBlack>Ganhos</TextBodyBlack>
                        <TextBodyBlackBold>
                          R$ {item.ganhos.toFixed(2)}
                        </TextBodyBlackBold>
                        <TextBodyRed>Gastos</TextBodyRed>
                        <TextBodyRedBold>
                          R$ {item.gastos.toFixed(2)}
                        </TextBodyRedBold>
                      </BoxBodyButton>
                    </BoxButton>
                  }
                  buttonStyle={{
                    width: 150,
                    height: 150,
                    borderRadius: 20,
                    backgroundColor: "#FF9090",
                    marginLeft: 5,
                    marginRight: 5,
                    marginTop: 10,
                  }}
                />
              </ShimmerPlaceHolder>
            );
          })}
        </BoxButton>
        <Title>Estatística</Title>
        <Subtitle>Ganhos</Subtitle>
        {dados.length ? (
          <LineChart
            data={{
              labels: [
                "Jan",
                "Fev",
                "Mar",
                "Abr",
                "Mai",
                "Jun",
                "Jul",
                "Ago",
                "Set",
                "Out",
                "Nov",
                "Dez",
              ],
              datasets: [
                {
                  data: dados.map((item) => item.ganhos),
                },
              ],
            }}
            width={Dimensions.get("screen").width - 20}
            height={200}
            chartConfig={{
              backgroundColor: "rgba(205, 205, 205, 0.25)",
              backgroundGradientFrom: "rgba(75, 75, 75, 0.40)",
              backgroundGradientTo: "rgba(75, 75, 75, 0.60)",
              decimalPlaces: 2, // optional, defaults to 2dp
              color: (opacity = 0.8) => `rgba(255, 255, 255, ${opacity})`,
              style: {
                borderRadius: 16,
              },
            }}
            bezier
            style={{
              marginVertical: 12,
              borderRadius: 16,
            }}
          />
        ) : (
          <ShimmerPlaceHolder
            autoRun={true}
            style={{
              height: 200,
              width: Dimensions.get("screen").width - 20,
              borderRadius: 16,
            }}
          ></ShimmerPlaceHolder>
        )}
        <Subtitle>Gastos</Subtitle>
        {dados.length ? (
          <LineChart
            data={{
              labels: [
                "Jan",
                "Fev",
                "Mar",
                "Abr",
                "Mai",
                "Jun",
                "Jul",
                "Ago",
                "Set",
                "Out",
                "Nov",
                "Dez",
              ],
              datasets: [
                {
                  data: dados.map((item) => item.gastos),
                },
              ],
            }}
            width={Dimensions.get("screen").width - 20}
            height={200}
            chartConfig={{
              backgroundColor: "rgba(159, 59, 51, 0.80)",
              backgroundGradientFrom: "rgba(150, 49, 50, 0.40)",
              backgroundGradientTo: "rgba(150, 49, 50, 0.60)",
              decimalPlaces: 2, // optional, defaults to 2dp
              color: (opacity = 0.8) => `rgba(255, 255, 255, ${opacity})`,
              style: {
                borderRadius: 16,
              },
            }}
            bezier
            style={{
              marginVertical: 12,
              borderRadius: 16,
            }}
          />
        ) : (
          <ShimmerPlaceHolder
            autoRun={true}
            style={{
              height: 200,
              width: Dimensions.get("screen").width - 20,
              borderRadius: 16,
            }}
          ></ShimmerPlaceHolder>
        )}
      </Scroll>
    </Container>
  );
}
