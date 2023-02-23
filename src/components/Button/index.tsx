import React from "react";
import { TouchableOpacityProps } from "react-native";
import { Container, Icon, Title, ContainerIcon } from "./styles";

import discord from "@src/assets/discord.svg";
import { scale } from "react-native-size-matters";

interface ButtonProps extends TouchableOpacityProps {
  icon?: boolean;
  title: string;
}

export function Button({ icon = false, title, ...rest }: ButtonProps) {
  return (
    <Container activeOpacity={0.8} {...rest}>
      {icon && (
        <ContainerIcon>
          <Icon asset={discord} width={scale(25)} height={scale(25)} />
        </ContainerIcon>
      )}

      <Title>{title}</Title>
    </Container>
  );
}
