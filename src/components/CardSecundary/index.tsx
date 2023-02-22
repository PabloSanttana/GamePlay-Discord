import { Text } from "react-native";
import React from "react";
import { RectButtonProps } from "react-native-gesture-handler";
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

interface PropsCardSecundary extends RectButtonProps {}

export function CardSecundary({ ...rest }: PropsCardSecundary) {
  return (
    <Container {...rest}>
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
