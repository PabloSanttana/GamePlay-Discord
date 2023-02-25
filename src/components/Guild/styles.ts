import styled from "styled-components/native";

import { createScale } from "@src/utils/createScale";

export const Container = styled.TouchableOpacity`
  margin-top: ${createScale(16)};
  flex-direction: row;
  height: ${createScale(70)};
  align-items: center;
  padding-right: ${createScale(24)};
  padding-left: ${createScale(24)};
`;

export const Content = styled.View`
  flex: 1;
  padding-right: ${createScale(24)};
  padding-left: ${createScale(20)};
`;

export const Title = styled.Text`
  font-family: ${(props) => props.theme.fonts.title700};
  font-size: ${createScale(18)};
  color: ${(props) => props.theme.colors.heading};
`;
export const SubtTitle = styled.Text`
  font-family: ${(props) => props.theme.fonts.text400};
  font-size: ${createScale(13)};
  color: ${(props) => props.theme.colors.heading};
`;
