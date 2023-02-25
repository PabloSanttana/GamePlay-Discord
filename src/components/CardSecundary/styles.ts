import styled from "styled-components/native";

import { createScale } from "@src/utils/createScale";
import { LocalSvg } from "react-native-svg";

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  height: ${createScale(70)};
  margin-top: ${createScale(20)};
  padding-left: ${createScale(24)};
`;

export const Content = styled.View`
  flex: 1;
  height: 100%;
  padding-right: ${createScale(24)};
  padding-left: ${createScale(20)};
`;

export const ContentLine = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
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

export const Footer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: ${createScale(8)};
`;

export const FooterIcon = styled(LocalSvg)``;

export const FooterTitle = styled.Text`
  margin-left: ${createScale(12)};
  margin-right: auto;
  font-family: ${(props) => props.theme.fonts.text500};
  font-size: ${createScale(13)};
  color: ${(props) => props.theme.colors.heading};
`;

export const FooterSpan = styled.Text`
  margin-left: ${createScale(5)};
  font-family: ${(props) => props.theme.fonts.text500};
  font-size: ${createScale(13)};
  color: ${(props) => props.theme.colors.heading};
`;
