import styled from "styled-components/native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { scale } from "react-native-size-matters";
import { createScale } from "@src/utils/createScale";

export const HomeContainer = styled.View`
  flex: 1;
  padding-top: ${(getStatusBarHeight() || scale(20)) + scale(10) + "px"};
`;

export const HomeFlatlistHorizontal = styled.View``;

export const ListEmpty = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
export const ListEmptyTitle = styled.Text`
  color: ${(props) => props.theme.colors.heading};
  font-family: ${(props) => props.theme.fonts.title700};
  font-size: ${createScale(17)};
  margin-top: ${createScale(10)};
`;
