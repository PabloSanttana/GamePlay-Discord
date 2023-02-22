import styled from "styled-components/native";
import { createScale } from "@src/utils/createScale";
import { RectButton } from "react-native-gesture-handler";
import { LocalSvg } from "react-native-svg";

export const Container = styled(RectButton)`
  width: 100%;
  height: ${createScale(56)};
  background-color: ${(props) => props.theme.colors.primary};
  border-radius: ${createScale(8)};
  flex-direction: row;
  align-items: center;
`;

export const ContainerIcon = styled.View`
  justify-content: center;
  align-items: center;
  width: ${createScale(56)};
  height: 100%;
  border-right-width: ${createScale(1)};
  border-right-color: ${(props) => props.theme.colors.line};
`;

export const Icon = styled(LocalSvg)``;

export const Title = styled.Text`
  flex: 1;
  color: ${(props) => props.theme.colors.heading};
  text-align: center;
  font-size: ${createScale(17)};
  font-family: ${(props) => props.theme.fonts.text500};
`;
