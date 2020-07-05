import React, { useState, useRef } from "react";

import Carousel, { Pagination } from "react-native-snap-carousel";
import { Dimensions } from "react-native";
import { Button } from "react-native-elements";
import { Container, LogoImage, BoxLogo, BoxMenu, TextMenu } from "./styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Header from "../../components/Header";

const data = [
  { title: "A Faculdade", icon_name: "school", link: 'Faculdade' },
  { title: "Horário de Aula", icon_name: "alarm-bell", link: 'Aulas' },
  { title: "Horário do Ônibus", icon_name: "bus-clock", link: 'Bus' },
  { title: "Links", icon_name: "link-variant", link: 'Links' },
  { title: "Informes", icon_name: "information-variant", link: 'Informes' },
  { title: "Transparência", icon_name: "cash", link: 'Transparencia' },
  { title: "Ouvidoria", icon_name: "wechat", link: 'Ouvidoria' },
  { title: "Loja", icon_name: "store", link: 'Loja' },
  { title: "Eventos Universitários", icon_name: "calendar", link: 'Eventos' },
  { title: 'Cadernos Universitários', icon_name: 'book', link: 'Cadernos'},
  { title: 'E-mail', icon_name: 'email', link: 'Emails'},
];

const { width, height } = Dimensions.get("screen");

export default function Home({navigation}) {
  const [activeSlide, setActiveSlide] = useState(0);
  const carousel = useRef();
  function renderMenu({ item, index }) {
    return (
      <Button
        key={index}
        icon={
          <MaterialCommunityIcons
            name={item.icon_name}
            size={90}
            color="#5b5b5b"
          />
        }
        title={item.title}
        titleStyle={{
          marginTop: 10,
          fontFamily: "Cairo-Bold",
          color: "#5B5B5B",
          fontSize: 14,
        }}
        buttonStyle={{
          backgroundColor: "#FFF",
          height: height/2 - 170,
          borderRadius: 10,
          flexDirection: "column",
          alignItems: 'center',
          justifyContent: 'center'
        }}
        raised={true}
        onPress={() => navigation.navigate(item.link)}
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
          decelerationRate='fast'
          ref={carousel}
          data={data}
          inactiveSlideOpacity={0.4}
          layout="default"
          sliderWidth={width}
          itemWidth={width - 160}
          renderItem={renderMenu}
          onSnapToItem={(index) => setActiveSlide(index)}
        />
        <Pagination
          animatedDuration={1000}
          dotsLength={data.length}
          activeDotIndex={activeSlide}
          dotStyle={{
            width: 12,
            height: 12,
            borderRadius: 6,
            marginHorizontal: -5,
            backgroundColor: "#700000",
          }}
          inactiveDotStyle={{
            width: 10,
            height: 10,
            borderRadius: 5,
            marginHorizontal: -5,
            backgroundColor: "#FF8181",
          }}
          inactiveDotOpacity={0.4}
          inactiveDotScale={0.6}
          dotContainerStyle={{ height: 0 }}
        />
      </BoxMenu>
    </Container>
  );
}
