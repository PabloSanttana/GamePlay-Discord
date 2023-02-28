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
import { useAuth } from "@src/hooks/auth";
import { TouchableOpacity } from "react-native";

type ProfileProps = {
  setIsLogout: () => void;
};

export function Profile({ setIsLogout }: ProfileProps) {
  const { user } = useAuth();
  const navigation = useNavigation();

  function handleNavigationToCreatePlay() {
    //@ts-ignore
    navigation.navigate("CreatePlay");
  }
  return (
    <Container>
      <TouchableOpacity activeOpacity={0.7} onPress={() => setIsLogout()}>
        <Image source={{ uri: user.avatar }} resizeMode="stretch" />
      </TouchableOpacity>

      <ConatinerText>
        <ContainerTitle>
          <Title>Olá,</Title>
          <Title bold> {user.firstName}</Title>
        </ContainerTitle>

        <Subtitle>Hoje é dia de vitória</Subtitle>
      </ConatinerText>
      <ButtonAdd activeOpacity={0.8} onPress={handleNavigationToCreatePlay}>
        <Ionicons name="add" size={30} color="white" />
      </ButtonAdd>
    </Container>
  );
}
