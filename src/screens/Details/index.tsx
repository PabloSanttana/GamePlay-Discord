import React, { useEffect, useState } from "react";
import { Alert, FlatList, Share, Platform, Linking } from "react-native";

import { Background } from "@src/components/Background";
import { Header } from "@src/components/Header";
import Banner from "@src/assets/banner.png";
import { HeaderList } from "@src/components/HeaderList";
import { Menber, MenberProps } from "@src/components/Member";
import { Button } from "@src/components/Button";
import { ListDivider } from "../../components/ListDivider";
import {
  Container,
  Title,
  SubTitle,
  BackgroundImage,
  ContainerButton,
} from "./styles";
import { useRoute } from "@react-navigation/native";
import { AppointmentProps } from "@src/services/storage";
import { api } from "@src/services/api";
import { Load } from "@src/components/Load";
import { ListEmpty, ListEmptyTitle } from "../Home/styles";

type Params = {
  data: AppointmentProps;
};

type GuildWidget = {
  id: string;
  name: string;
  instant_invite: string;
  members: MenberProps[];
  presence_count: number;
};

export function Details() {
  const route = useRoute();
  const { data } = route.params as Params;
  const [widget, setWidget] = useState({} as GuildWidget);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getUsersGuild();
  }, [data]);

  async function getUsersGuild() {
    try {
      const response = await api.get(`/guilds/${data.guild.id}/widget.json`);
      setWidget(response.data);
    } catch (error) {
      isValidGuild();
    } finally {
      setLoading(false);
    }
  }

  function handleShareInvitation() {
    if (isValidGuild()) {
      return;
    }

    const message =
      Platform.OS === "ios"
        ? `junte-se a ${data.guild.game}.`
        : widget.instant_invite;

    Share.share({
      message: message,
      url: widget.instant_invite,
    });
  }

  function isValidGuild() {
    if (!widget.instant_invite) {
      Alert.alert(
        "Error ao tentar pegar informações do servidor, verifique se o servidor está com a opção widget json habilidata?"
      );
      return true;
    }
  }

  function handleOpenGuild() {
    if (isValidGuild()) {
      return;
    }

    Linking.openURL(widget.instant_invite);
  }

  if (loading) {
    return (
      <Background>
        <Load />
      </Background>
    );
  }

  return (
    <Background>
      <Container>
        <Header title="Details" share shareInvitation={handleShareInvitation} />
        <BackgroundImage source={Banner} resizeMode="stretch">
          <Title>{data.guild.name}</Title>
          <SubTitle>{data.description}</SubTitle>
        </BackgroundImage>
        <HeaderList
          title="Jogadores"
          subtitle={`Total ${widget.members ? widget.members.length : 0}`}
        />
        <FlatList
          keyExtractor={(item) => item.avatar_url}
          data={widget.members}
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
          ListEmptyComponent={() => (
            <ListEmpty>
              <ListEmptyTitle>Sem menbros</ListEmptyTitle>
            </ListEmpty>
          )}
        />
        <ContainerButton>
          <Button icon title="Entrar no servidor" onPress={handleOpenGuild} />
        </ContainerButton>
      </Container>
    </Background>
  );
}
