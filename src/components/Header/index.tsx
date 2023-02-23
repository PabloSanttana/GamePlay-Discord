import React from "react";
import { Fontisto } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

import { Container, Title, ButtonOpacity, ContainerShare } from "./styles";
import { useTheme } from "styled-components";
import { scale } from "react-native-size-matters";
import { useNavigation } from "@react-navigation/native";

interface PropsHeader {
  title: string;
  share?: boolean;
}

export function Header({ title, share = false }: PropsHeader) {
  const navigation = useNavigation();

  function handleGoback() {
    navigation.goBack();
  }
  const theme = useTheme();
  return (
    <Container colors={[theme.colors.secondary80, theme.colors.secondary70]}>
      <ButtonOpacity onPress={handleGoback}>
        <FontAwesome5
          name="arrow-left"
          size={scale(24)}
          color={theme.colors.heading}
        />
      </ButtonOpacity>
      <Title>{title}</Title>
      <ContainerShare>
        {share && (
          <ButtonOpacity activeOpacity={0.8}>
            <Fontisto
              name="share"
              size={scale(24)}
              color={theme.colors.primary}
            />
          </ButtonOpacity>
        )}
      </ContainerShare>
    </Container>
  );
}
