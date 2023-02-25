import React from "react";
import { FlatList } from "react-native";

import { Background } from "@src/components/Background";
import { Header } from "@src/components/Header";
import Banner from "@src/assets/banner.png";
import { HeaderList } from "@src/components/HeaderList";
import { Menber } from "@src/components/Member/index";
import { Button } from "@src/components/Button";
import { ListDivider } from "../../components/ListDivider/index";
import {
  Container,
  Title,
  SubTitle,
  BackgroundImage,
  ContainerButton,
} from "./styles";

export function Details() {
  const menbers = [
    {
      id: "1",
      userName: "Pablo",
      status: "Disponível",
      avatar_url: "https://avatars.githubusercontent.com/u/52142127?v=4",
    },
    {
      id: "2",
      userName: "Pablo",
      status: "Ocupado",
      avatar_url: "https://avatars.githubusercontent.com/u/52142127?v=4",
    },
    {
      id: "3",
      userName: "Pablo",
      status: "Indisponível",
      avatar_url: "https://avatars.githubusercontent.com/u/52142127?v=4",
    },
  ];

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
        <HeaderList title="Jogadores" subtitle={`Total ${menbers.length}`} />
        <FlatList
          keyExtractor={(item) => item.id}
          data={menbers}
          renderItem={({ item }) => (
            <Menber
              avatar_url={item.avatar_url}
              status={item.status}
              userName={item.userName}
            />
          )}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => <ListDivider />}
          contentContainerStyle={{ paddingBottom: 69 }}
        />
        <ContainerButton>
          <Button icon title="Entrar no servidor" onPress={() => {}} />
        </ContainerButton>
      </Container>
    </Background>
  );
}
