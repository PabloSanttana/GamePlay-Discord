import styled from "styled-components/native";
import { createScale } from "@src/utils/createScale";

export const Container = styled.View`
  flex: 1;
`;

export const HeaderList = styled.View`
  margin-left: ${createScale(24)};
  padding-right: ${createScale(24)};
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${createScale(10)};
`;

export const HeaderTitle = styled.Text`
  font-family: ${(props) => props.theme.fonts.title700};
  font-size: ${createScale(18)};
  color: ${(props) => props.theme.colors.heading};
`;

export const HeaderSubtitle = styled.Text`
  font-family: ${(props) => props.theme.fonts.text400};
  font-size: ${createScale(13)};
  color: ${(props) => props.theme.colors.heading};
`;
