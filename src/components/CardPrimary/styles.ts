import { LocalSvg } from "react-native-svg";
import styled from "styled-components/native";
import { createScale } from "@src/utils/createScale";
import { RectButton } from "react-native-gesture-handler";

export const Container = styled(RectButton)`
  width: ${createScale(104)};
  height: ${createScale(120)};
  background-color: ${(props) => props.theme.colors.secondary40};
  border-color: ${(props) => props.theme.colors.secondary30};
  border-width: ${createScale(1)};
  border-radius: ${createScale(8)};
  align-items: center;
  justify-content: center;
  position: relative;
  margin-right: ${createScale(8)};
`;

export const Icon = styled(LocalSvg)``;

export const Title = styled.Text`
  color: ${(props) => props.theme.colors.heading};
  font-size: ${createScale(15)};
  font-family: ${(props) => props.theme.fonts.title700};
  margin-top: ${createScale(16)};
`;

type CardPrimaryMarkerProps = {
  active?: boolean;
};

export const Marker = styled.View<CardPrimaryMarkerProps>`
  width: ${createScale(8)};
  height: ${createScale(8)};
  background-color: ${(props) =>
    props.active ? props.theme.colors.primary : props.theme.colors.secondary90};
  border-color: ${(props) =>
    props.active ? props.theme.colors.primary : props.theme.colors.secondary30};
  border-width: ${createScale(1)};
  border-radius: ${createScale(2)};
  position: absolute;
  top: ${createScale(8)};
  right: ${createScale(8)};
`;
