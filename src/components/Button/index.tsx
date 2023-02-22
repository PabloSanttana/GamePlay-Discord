import React from "react";

import { RectButtonProps } from "react-native-gesture-handler";
import { Container, Icon, Title, ContainerIcon } from "./styles";

import discord from "@src/assets/discord.svg";
import { scale } from "react-native-size-matters";

interface ButtonProps extends RectButtonProps {
  icon?: boolean;
  title: string;
}

export function Button({ icon = false, title, ...rest }: ButtonProps) {
  return (
    <Container {...rest}>
      {icon && (
        <ContainerIcon>
          <Icon asset={discord} width={scale(25)} height={scale(25)} />
        </ContainerIcon>
      )}

      <Title>{title}</Title>
    </Container>
  );
}
