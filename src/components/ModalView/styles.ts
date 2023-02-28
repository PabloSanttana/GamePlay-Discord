import styled from "styled-components/native";
import { createScale } from "@src/utils/createScale";

export const ModallView = styled.Modal``;

export const Overlay = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.colors.overlay};
`;
export const Container = styled.View`
  flex: 1;
  margin-top: ${createScale(100)};
`;

export const Bar = styled.View`
  width: ${createScale(39)};
  height: ${createScale(2)};
  border-radius: ${createScale(2)};
  background-color: ${(props) => props.theme.colors.secondary30};
  align-self: center;
  margin-top: ${createScale(13)};
`;
