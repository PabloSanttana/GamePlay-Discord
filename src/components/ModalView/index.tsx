import React, { ReactNode } from "react";
import { ModalProps } from "react-native";

import { Background } from "../Background";

import { ModallView, Bar, Container, Overlay } from "./styles";

type Props = ModalProps & {
  children: ReactNode;
};

export function ModalView({ children, ...rest }: Props) {
  return (
    <ModallView transparent animationType="slide" {...rest}>
      <Overlay>
        <Container>
          <Background>
            <Bar />
            {children}
          </Background>
        </Container>
      </Overlay>
    </ModallView>
  );
}
