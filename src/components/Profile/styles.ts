import styled from "styled-components/native";
import { createScale } from "@src/utils/createScale";

export const Container = styled.View`
  height: ${createScale(60)};
  margin: ${createScale(10)} ${createScale(24)};
  flex-direction: row;
  align-items: center;
`;

export const Image = styled.Image`
  width: ${createScale(48)};
  height: ${createScale(48)};
  border-radius: ${createScale(8)};
`;

export const ConatinerText = styled.View`
  margin-left: ${createScale(20)};
`;

export const ContainerTitle = styled.View`
  flex-direction: row;
`;

type PropsHedaderTitle = {
  bold?: boolean;
};

export const Title = styled.Text<PropsHedaderTitle>`
  color: ${(props) => props.theme.colors.heading};
  font-size: ${createScale(24)};
  font-family: ${(props) =>
    props.bold ? props.theme.fonts.title700 : props.theme.fonts.title500};
`;

export const Subtitle = styled.Text`
  color: ${(props) => props.theme.colors.heading};
  font-size: ${createScale(13)};
  font-family: ${(props) => props.theme.fonts.text400};
`;

export const ButtonAdd = styled.TouchableOpacity`
  width: ${createScale(48)};
  height: ${createScale(48)};
  border-radius: ${createScale(8)};
  margin-left: auto;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.primary};
`;
