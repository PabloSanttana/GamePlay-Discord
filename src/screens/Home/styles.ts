import styled from "styled-components/native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { scale } from "react-native-size-matters";
import { createScale } from "@src/utils/createScale";

export const HomeContainer = styled.View`
  flex: 1;
  padding-top: ${(getStatusBarHeight() || scale(20)) + scale(10) + "px"};
`;

export const HomeFlatlistHorizontal = styled.View``;
