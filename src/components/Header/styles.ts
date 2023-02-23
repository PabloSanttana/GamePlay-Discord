import styled from "styled-components/native";
import { createScale } from "@src/utils/createScale";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { scale } from "react-native-size-matters";
import { LinearGradient } from "expo-linear-gradient";

export const Container = styled(LinearGradient)`
  padding: 0px ${createScale(20)};
  padding-top: ${(getStatusBarHeight() || scale(20)) + scale(10) + "px"};
  height: ${createScale(104)};
  flex-direction: row;
  align-items: center;
`;

export const ButtonOpacity = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-family: ${(props) => props.theme.fonts.title700};
  font-size: ${createScale(20)};
  color: ${(props) => props.theme.colors.heading};
  margin: 0px auto;
`;

export const ContainerShare = styled.View`
  width: ${createScale(24)};
`;
