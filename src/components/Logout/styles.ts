import styled from "styled-components/native";
import { createScale } from "@src/utils/createScale";

export const ModallView = styled.Modal``;

export const Overlay = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.colors.overlay};
  justify-content: flex-end;
`;
export const Container = styled.View`
  height: ${createScale(180)};
  width: 100%;
`;

export const ContainerTitle = styled.View`
  margin-top: ${createScale(20)};
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const Title = styled.Text`
  font-family: ${(props) => props.theme.fonts.title500};
  font-size: ${createScale(24)};
  color: ${(props) => props.theme.colors.heading};
`;

type PropsColor = {
  primary?: boolean;
};

export const GamerText = styled.Text<PropsColor>`
  font-family: ${(props) => props.theme.fonts.title700};
  font-size: ${createScale(24)};
  color: ${(props) =>
    props.primary ? props.theme.colors.primary : props.theme.colors.heading};
`;

export const ContainerButton = styled.View`
  margin-top: ${createScale(20)};
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
`;

export const Button = styled.TouchableOpacity<PropsColor>`
  width: ${createScale(160)};
  height: ${createScale(56)};
  border-radius: ${createScale(8)};
  border-width: ${createScale(1)};
  border-color: ${(props) => props.theme.colors.secondary30};
  align-items: center;
  justify-content: center;
  background-color: ${(props) =>
    props.primary ? props.theme.colors.primary : "transparent"};
`;

export const ButtonText = styled.Text`
  font-family: ${(props) => props.theme.fonts.text400};
  font-size: ${createScale(15)};
  color: ${(props) => props.theme.colors.heading};
`;
