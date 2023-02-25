import styled from "styled-components/native";
import { createScale } from "@src/utils/createScale";

export const Container = styled.View`
  flex: 1;
`;

export const BackgroundImage = styled.ImageBackground`
  height: ${createScale(234)};
  padding: 0px ${createScale(24)};
  justify-content: flex-end;
  background-color: red;
  padding-bottom: ${createScale(24)};
  margin-bottom: ${createScale(30)};
`;

export const Title = styled.Text`
  font-family: ${(props) => props.theme.fonts.title700};
  font-size: ${createScale(28)};
  color: ${(props) => props.theme.colors.heading};
  margin-bottom: ${createScale(10)};
`;
export const SubTitle = styled.Text`
  font-family: ${(props) => props.theme.fonts.text500};
  font-size: ${createScale(13)};
  color: ${(props) => props.theme.colors.heading};
`;
export const Content = styled.View`
  flex: 1;
  padding: 0px ${createScale(24)};
`;

export const ContainerButton = styled.View`
  margin: ${createScale(24)};
`;
