import React from "react";

import Carousel, {Pagination} from "react-native-snap-carousel";
import { Dimensions } from "react-native";
import { Button } from "react-native-elements";
import { Container, LogoImage, BoxLogo, BoxMenu, TextMenu, MenuImage } from "./styles";

import Header from "../../components/Header";

const data = [
  { title: "A Faculdade", img_url: "../../assets/uneb2.jpeg" },
  { title: "Transparência" },
  { title: "Horário de Aula" },
  { title: "Horário de Ônibus" },
  { title: "Links" },
  { title: "Emails" },
  { title: "Loja" },
  { title: "Eventos" },
];

const { width } = Dimensions.get("screen");
export default function Home() {
  function renderMenu({ item }) {
    return (
      <Button
        icon={
            <MenuImage source={require('../../assets/uneb2.jpeg')}/>
        }
        title={item.title}
        titleStyle={{
            marginTop: 20,
          fontFamily: "Cairo-Bold",
          color: "#5B5B5B",
          fontSize: 14,
        }}
        buttonStyle={{ backgroundColor: "#FFF", height: 160, borderRadius: 10, flexDirection: 'column' }}
        raised={true}
      />
    );
  }
  return (
    <Container>
      <Header />
      <BoxLogo>
        <LogoImage source={require("../../assets/logoDireito.png")} />
      </BoxLogo>
      <BoxMenu>
        <TextMenu>BEM-VINDO</TextMenu>
        <Carousel
          data={data}
          inactiveSlideOpacity={0.5}
          layout="default"
          sliderWidth={width}
          itemWidth={200}
          renderItem={renderMenu}
        />
        <Pagination 
            dotsLength={data.length}
            activeDotIndex={0}
            dotStyle={{
                width: 14,
                height: 14,
                borderRadius: 7,
                marginHorizontal: -5,
                backgroundColor: '#700000'
            }}
            inactiveDotStyle={{
                width: 12,
                height: 12,
                borderRadius: 6,
                marginHorizontal: -5,
                backgroundColor: '#FF8181'
            }}
            inactiveDotOpacity={0.4}
            inactiveDotScale={0.6}
            dotContainerStyle={{height: 0}}
        />
      </BoxMenu>
    </Container>
  );
}
