import React from "react";

import { Container, Subtitle, Title } from "./styles";

interface PropsHeaderList {
  title: string;
  subtitle: string;
}

export function HeaderList({ title, subtitle }: PropsHeaderList) {
  return (
    <Container>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </Container>
  );
}
