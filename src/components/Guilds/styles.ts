import styled from "styled-components/native";
import { createScale } from "@src/utils/createScale";

export const Container = styled.View`
  flex: 1;
`;

export const Separador = styled.View`
  height: ${createScale(1)};
  margin-left: ${createScale(105)};
  background-color: ${(props) => props.theme.colors.secondary50};
`;
