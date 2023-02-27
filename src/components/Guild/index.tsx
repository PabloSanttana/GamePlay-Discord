import React from "react";
import { TouchableOpacityProps } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

import { Container, Content, SubtTitle, Title } from "./styles";
import { GuildIcon } from "@src/components/GuildIcon";

export interface GuildProps {
  id: string;
  name: string;
  game: string;
  icon: string;
  owner: boolean;
}
interface PropsGuild extends TouchableOpacityProps {
  data: GuildProps;
}

export function Guild({ data, ...rest }: PropsGuild) {
  return (
    <Container activeOpacity={0.8} {...rest}>
      <GuildIcon iconId={data.icon} guildId={data.id} />
      <Content>
        <Title>{data.name}</Title>
        <SubtTitle>{data.game}</SubtTitle>
      </Content>
      <FontAwesome name="chevron-right" size={13} color="white" />
    </Container>
  );
}
