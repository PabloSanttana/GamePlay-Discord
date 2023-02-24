import React from "react";
import { TouchableOpacityProps } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

import Calendar from "@src/assets/calendar.svg";

import {
  Container,
  Content,
  ContentLine,
  SubtTitle,
  Title,
  Footer,
  FooterIcon,
  FooterSpan,
  FooterTitle,
} from "./styles";
import { scale } from "react-native-size-matters";
import { GuildIcon } from "@src/components/GuildIcon";

interface PropsCardSecundary extends TouchableOpacityProps {}

export function CardSecundary({ ...rest }: PropsCardSecundary) {
  return (
    <Container activeOpacity={0.8} {...rest}>
      <GuildIcon icon="https://avatars.githubusercontent.com/u/52142127?v=4" />
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
