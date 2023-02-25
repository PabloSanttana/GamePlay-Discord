import { createScale } from "@src/utils/createScale";
import styled from "styled-components/native";

export const Container = styled.View`
  height: ${createScale(1)};
  margin-left: ${createScale(105)};
  background-color: ${(props) => props.theme.colors.secondary50};
`;
