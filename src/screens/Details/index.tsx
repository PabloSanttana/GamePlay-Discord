import React from "react";

import { Container, Title, SubTitle, Content, BackgroundImage } from "./styles";
import { Background } from "@src/components/Background";
import { Header } from "@src/components/Header";

import Banner from "@src/assets/banner.png";
import { ListCard } from "@src/components/ListCard";

export function Details() {
  return (
    <Background>
      <Container>
        <Header title="Details" share />
        <BackgroundImage source={Banner} resizeMode="stretch">
          <Title>League of Legends</Title>
          <SubTitle>
            É hoje que vamos chegar ao challenger sem perder uma partida da md10
          </SubTitle>
        </BackgroundImage>
        <ListCard titleHeader="Jogadores" onPress={() => {}} />
      </Container>
    </Background>
  );
}
