import React from "react";
import { Ionicons } from "@expo/vector-icons";

import {
  ButtonAdd,
  ConatinerText,
  Container,
  Image,
  Subtitle,
  Title,
  ContainerTitle,
} from "./styles";

import UserImage from "@src/assets/user.png";
import { useNavigation } from "@react-navigation/native";

export function Profile() {
  const navigation = useNavigation();

  function handleNavigationToCreatePlay() {
    //@ts-ignore
    navigation.navigate("CreatePlay");
  }
  return (
    <Container>
      <Image source={UserImage} resizeMode="stretch" />

      <ConatinerText>
        <ContainerTitle>
          <Title>Olá,</Title>
          <Title bold>Pablo</Title>
        </ContainerTitle>

        <Subtitle>Hoje é dia de vitória</Subtitle>
      </ConatinerText>
      <ButtonAdd activeOpacity={0.8} onPress={handleNavigationToCreatePlay}>
        <Ionicons name="add" size={30} color="white" />
      </ButtonAdd>
    </Container>
  );
}
