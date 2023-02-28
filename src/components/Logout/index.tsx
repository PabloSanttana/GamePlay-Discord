import React, { ReactNode } from "react";
import { ModalProps } from "react-native";

import { Background } from "../Background";

import {
  ModallView,
  Container,
  Overlay,
  ContainerTitle,
  GamerText,
  Title,
  ContainerButton,
  Button,
  ButtonText,
} from "./styles";

type Props = ModalProps & {
  handleSelected: (boolean: boolean) => void;
};

export function Logout({ handleSelected, ...rest }: Props) {
  return (
    <ModallView transparent animationType="slide" {...rest}>
      <Overlay>
        <Container>
          <Background>
            <ContainerTitle>
              <Title>Deseja sair do</Title>
              <GamerText> Game</GamerText>
              <GamerText primary>Play</GamerText>
            </ContainerTitle>
            <ContainerButton>
              <Button onPress={() => handleSelected(false)}>
                <ButtonText>Não</ButtonText>
              </Button>
              <Button primary onPress={() => handleSelected(true)}>
                <ButtonText>Sair</ButtonText>
              </Button>
            </ContainerButton>
          </Background>
        </Container>
      </Overlay>
    </ModallView>
  );
}
