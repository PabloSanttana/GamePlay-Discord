import styled from "styled-components/native";
import { createScale } from "@src/utils/createScale";

export const ContainerImage = styled.Image`
  width: ${createScale(64)};
  height: ${createScale(68)};
  border-radius: ${createScale(8)};
  margin-left: ${createScale(24)};
  margin-right: ${createScale(20)};
  border-width: ${createScale(1)};
  border-color: ${(props) => props.theme.colors.secondary50};
`;
