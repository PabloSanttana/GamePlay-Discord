import React from "react";

import { Avatar } from "@src/components/Avatar";

import {
  Container,
  Content,
  Title,
  Status,
  StatusContainer,
  ColorState,
} from "./styles";

export interface MenberProps {
  userName: string;
  status: string;
  avatar_url: string;
}

export function Menber({ userName, status, avatar_url }: MenberProps) {
  return (
    <Container>
      <Avatar avatar_url={avatar_url} />
      <Content>
        <Title>{userName}</Title>
        <StatusContainer>
          <ColorState state={status} />
          <Status>{status}</Status>
        </StatusContainer>
      </Content>
    </Container>
  );
}
