import React from "react";
import { TextInputProps } from "react-native";
import {
  Container,
  InputText,
  Label,
  ContainerGradient,
  ContainerTexts,
  InfoText,
} from "./styles";
import { useTheme } from "styled-components";

interface PropsInput extends TextInputProps {
  label?: string;
  info?: string;
  fullWidth?: boolean;
}

export function Input({
  label = "",
  info = "",
  fullWidth = false,
  ...rest
}: PropsInput) {
  const theme = useTheme();
  return (
    <Container>
      <ContainerTexts>
        {!!label && <Label>{label}</Label>}
        {!!info && <InfoText>{info}</InfoText>}
      </ContainerTexts>

      <ContainerGradient
        fullWidth={fullWidth}
        colors={[theme.colors.secondary50, theme.colors.secondary70]}
      >
        <InputText fullWidth={fullWidth} {...rest} />
      </ContainerGradient>
    </Container>
  );
}
