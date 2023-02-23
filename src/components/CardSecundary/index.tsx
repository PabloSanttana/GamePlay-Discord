import React from "react";
import { TouchableOpacityProps } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

import UserImage from "@src/assets/user.png";
import Calendar from "@src/assets/calendar.svg";

import {
  Container,
  Content,
  ContentLine,
  Image,
  SubtTitle,
  Title,
  Footer,
  FooterIcon,
  FooterSpan,
  FooterTitle,
} from "./styles";
import { scale } from "react-native-size-matters";

import { useTheme } from "styled-components";

interface PropsCardSecundary extends TouchableOpacityProps {}

export function CardSecundary({ ...rest }: PropsCardSecundary) {
  const theme = useTheme();
  return (
    <Container activeOpacity={0.8} {...rest}>
      <Image source={UserImage} />
      <Content>
        <ContentLine>
          <Title>Lendários</Title>
          <SubtTitle>Ranqueada</SubtTitle>
        </ContentLine>
        <SubtTitle>League of Legends</SubtTitle>
        <Footer>
          <FooterIcon asset={Calendar} width={scale(16)} height={scale(16)} />
          <FooterTitle>Sex 18/06 às 21:00h</FooterTitle>
          <FontAwesome5 name="user-alt" size={scale(16)} color="red" />
          <FooterSpan>3</FooterSpan>
        </Footer>
      </Content>
    </Container>
  );
}
