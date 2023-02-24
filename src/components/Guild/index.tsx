import React from "react";
import { TouchableOpacityProps } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

import { Container, Content, SubtTitle, Title } from "./styles";
import { GuildIcon } from "@src/components/GuildIcon";

interface PropsGuild extends TouchableOpacityProps {
  title: string;
  game: string;
  icon: string;
}

export function Guild({ title, game, icon, ...rest }: PropsGuild) {
  return (
    <Container activeOpacity={0.8} {...rest}>
      <GuildIcon icon={icon} />
      <Content>
        <Title>{title}</Title>
        <SubtTitle>{game}</SubtTitle>
      </Content>
      <FontAwesome name="chevron-right" size={13} color="white" />
    </Container>
  );
}
