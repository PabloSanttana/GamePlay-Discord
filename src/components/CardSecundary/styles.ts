import styled from "styled-components/native";

import { RectButton } from "react-native-gesture-handler";
import { createScale } from "@src/utils/createScale";
import { LocalSvg } from "react-native-svg";

export const Container = styled(RectButton)`
  flex-direction: row;
  height: ${createScale(70)};
  margin-top: ${createScale(20)};
`;

export const Image = styled.Image`
  width: ${createScale(64)};
  height: ${createScale(68)};
  border-radius: ${createScale(8)};
  margin-left: ${createScale(24)};
  margin-right: ${createScale(20)};
  border-width: ${createScale(1)};
  border-color: ${(props) => props.theme.colors.secondary50};
`;

export const Content = styled.View`
  flex: 1;
  height: 100%;
  border-bottom-width: ${createScale(1)};
  border-bottom-color: ${(props) => props.theme.colors.secondary50};
  padding-right: ${createScale(24)};
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
