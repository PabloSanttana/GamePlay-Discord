import styled from "styled-components/native";
import { createScale } from "@src/utils/createScale";

export const FlatlistHorizontal = styled.View``;

export const Title = styled.Text`
  font-family: ${(props) => props.theme.fonts.title700};
  font-size: ${createScale(18)};
  color: ${(props) => props.theme.colors.heading};
  margin-top: ${createScale(16)};
  margin-left: ${createScale(24)};
`;
