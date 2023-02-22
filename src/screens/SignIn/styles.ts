import styled from "styled-components/native";
import {
  getStatusBarHeight,
  getBottomSpace,
} from "react-native-iphone-x-helper";
import { scale } from "react-native-size-matters";
import { createScale } from "@src/utils/createScale";

export const SignInContainer = styled.View`
  flex: 1;
  align-items: center;
  padding-top: ${(getStatusBarHeight() || scale(20)) + scale(10) + "px"};
`;

export const SignInImage = styled.Image`
  width: 100%;
  height: ${createScale(360)};
`;

export const SignInContent = styled.View`
  flex: 1;
  width: 100%;
  padding: 0px ${createScale(50)};
  transform: translateY(${createScale(-20)});
`;

export const SignInTitle = styled.Text`
  font-family: ${(props) => props.theme.fonts.title700};
  font-size: ${createScale(40)};
  text-align: center;
  color: ${(props) => props.theme.colors.heading};
  margin-bottom: ${createScale(16)};
  line-height: ${createScale(40)};
`;

export const SignInSubTitle = styled.Text`
  text-align: center;
  font-size: ${createScale(15)};
  color: ${(props) => props.theme.colors.heading};
  font-family: ${(props) => props.theme.fonts.text400};
  margin-bottom: ${createScale(48)};
  line-height: ${createScale(25)};
`;
