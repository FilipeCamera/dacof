import React from "react";

import { Dimensions } from "react-native";
import { Button } from "react-native-elements";
import { AntDesign } from "@expo/vector-icons";
import {
  Container,
  Title,
  BoxScrollButton,
  BoxButton,
  BoxHeaderButton,
  TitleButton,
  BoxBodyButton,
  TextBodyBlack,
  TextBodyBlackBold,
  TextBodyRed,
  TextBodyRedBold,
  Scroll,
  Subtitle
} from "./styles";
import { LineChart } from "react-native-chart-kit";
import HeaderRed from "../../components/HeaderRed";
export default function Transparencia() {
  return (
    <Container>
      <HeaderRed />
      <Scroll contentContainerStyle={{flexGrow: 1, alignItems: 'center'}}>
        <Title>Transparência</Title>
        <BoxScrollButton
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        >
          <Button
            icon={
              <BoxButton>
                <BoxHeaderButton>
                  <TitleButton>Janeiro</TitleButton>
                  <AntDesign name="linechart" size={24} color="#963132" />
                </BoxHeaderButton>
                <BoxBodyButton>
                  <TextBodyBlack>Ganhos</TextBodyBlack>
                  <TextBodyBlackBold>R$ 680,00</TextBodyBlackBold>
                  <TextBodyRed>Gastos</TextBodyRed>
                  <TextBodyRedBold>R$ 560,00</TextBodyRedBold>
                </BoxBodyButton>
              </BoxButton>
            }
            buttonStyle={{
              width: 150,
              height: 150,
              borderRadius: 20,
              backgroundColor: "#FF9090",
              margin: 10,
            }}
          />
          <Button
            icon={
              <BoxButton>
                <BoxHeaderButton>
                  <TitleButton>Fevereiro</TitleButton>
                  <AntDesign name="linechart" size={24} color="#963132" />
                </BoxHeaderButton>
                <BoxBodyButton>
                  <TextBodyBlack>Ganhos</TextBodyBlack>
                  <TextBodyBlackBold>R$ 680,00</TextBodyBlackBold>
                  <TextBodyRed>Gastos</TextBodyRed>
                  <TextBodyRedBold>R$ 560,00</TextBodyRedBold>
                </BoxBodyButton>
              </BoxButton>
            }
            buttonStyle={{
              width: 150,
              height: 150,
              borderRadius: 20,
              backgroundColor: "#FF9090",
              margin: 10,
            }}
          />
          <Button
            icon={
              <BoxButton>
                <BoxHeaderButton>
                  <TitleButton>Março</TitleButton>
                  <AntDesign name="linechart" size={24} color="#963132" />
                </BoxHeaderButton>
                <BoxBodyButton>
                  <TextBodyBlack>Ganhos</TextBodyBlack>
                  <TextBodyBlackBold>R$ 680,00</TextBodyBlackBold>
                  <TextBodyRed>Gastos</TextBodyRed>
                  <TextBodyRedBold>R$ 560,00</TextBodyRedBold>
                </BoxBodyButton>
              </BoxButton>
            }
            buttonStyle={{
              width: 150,
              height: 150,
              borderRadius: 20,
              backgroundColor: "#FF9090",
              margin: 10,
            }}
          />
          <Button
            buttonStyle={{
              width: 150,
              height: 150,
              borderRadius: 20,
              backgroundColor: "#FF9090",
              margin: 10,
            }}
          />
          <Button
            buttonStyle={{
              width: 150,
              height: 150,
              borderRadius: 20,
              backgroundColor: "#FF9090",
              margin: 10,
            }}
          />
          <Button
            buttonStyle={{
              width: 150,
              height: 150,
              borderRadius: 20,
              backgroundColor: "#FF9090",
              margin: 10,
            }}
          />
          <Button
            buttonStyle={{
              width: 150,
              height: 150,
              borderRadius: 20,
              backgroundColor: "#FF9090",
              margin: 10,
            }}
          />
          <Button
            buttonStyle={{
              width: 150,
              height: 150,
              borderRadius: 20,
              backgroundColor: "#FF9090",
              margin: 10,
            }}
          />
          <Button
            buttonStyle={{
              width: 150,
              height: 150,
              borderRadius: 20,
              backgroundColor: "#FF9090",
              margin: 10,
            }}
          />
          <Button
            buttonStyle={{
              width: 150,
              height: 150,
              borderRadius: 20,
              backgroundColor: "#FF9090",
              margin: 10,
            }}
          />
          <Button
            buttonStyle={{
              width: 150,
              height: 150,
              borderRadius: 20,
              backgroundColor: "#FF9090",
              margin: 10,
            }}
          />
          <Button
            buttonStyle={{
              width: 150,
              height: 150,
              borderRadius: 20,
              backgroundColor: "#FF9090",
              margin: 10,
            }}
          />
        </BoxScrollButton>
        <Title>Estatística</Title>
        <Subtitle>Ganhos</Subtitle>
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
                data: [
                  100,
                  200,
                  300,
                  400,
                  500,
                  200,
                  600,
                  80,
                  200,
                  100,
                  300,
                  120,
                ],
              },
            ],
          }}
          width={Dimensions.get("screen").width - 20}
          height={200}
          chartConfig={{
            backgroundColor: "rgba(205, 205, 205, 0.25)",
            backgroundGradientFrom: "rgba(75, 75, 75, 0.20)",
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
        <Subtitle>Gastos</Subtitle>
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
                data: [
                  100,
                  200,
                  300,
                  400,
                  500,
                  200,
                  600,
                  80,
                  200,
                  100,
                  300,
                  120,
                ],
              },
            ],
          }}
          width={Dimensions.get("screen").width - 20}
          height={200}
          chartConfig={{
            backgroundColor: "rgba(159, 59, 51, 0.60)",
            backgroundGradientFrom: "rgba(150, 49, 50, 0.20)",
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
      </Scroll>
    </Container>
  );
}
