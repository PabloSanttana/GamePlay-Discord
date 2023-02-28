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
import { AppointmentProps } from "@src/services/storage";
import { CategoryProps } from "../Category";

const labelsCategory = {
  duel: "Duelo 1x1",
  ranked: "Ranqueada",
  training: "Treino",
  fun: "Diversão",
};

interface PropsCardSecundary extends TouchableOpacityProps {
  data: AppointmentProps;
}

export function CardSecundary({ data, ...rest }: PropsCardSecundary) {
  return (
    <Container activeOpacity={0.8} {...rest}>
      <GuildIcon iconId={data.guild.icon} guildId={data.guild.id} />
      <Content>
        <ContentLine>
          <Title>{data.guild.name}</Title>

          <SubtTitle>
            {labelsCategory[data.category as CategoryProps]}
          </SubtTitle>
        </ContentLine>
        <SubtTitle>{}</SubtTitle>
        <Footer>
          <FooterIcon asset={Calendar} width={scale(15)} height={scale(16)} />
          <FooterTitle>{data.date}</FooterTitle>
          <FontAwesome5 name="user-alt" size={scale(10)} color="red" />
          <FooterSpan>
            {data.guild.owner ? "Anfitrião" : "Visitante"}
          </FooterSpan>
        </Footer>
      </Content>
    </Container>
  );
}
