import styled from "styled-components/native";
import { createScale } from "@src/utils/createScale";
import { theme } from "@src/themes/theme";

export const Container = styled.View`
  flex-direction: row;
  height: ${createScale(50)};
  margin-top: ${createScale(20)};
`;

export const Content = styled.View`
  flex: 1;
  height: 100%;
  padding-right: ${createScale(24)};
`;

export const Title = styled.Text`
  font-family: ${(props) => props.theme.fonts.title700};
  font-size: ${createScale(18)};
  color: ${(props) => props.theme.colors.heading};
  margin-bottom: ${createScale(4)};
`;

export const StatusContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;
export const Status = styled.Text`
  font-family: ${(props) => props.theme.fonts.text400};
  font-size: ${createScale(13)};
  color: ${(props) => props.theme.colors.heading};
  margin-left: ${createScale(8)};
`;

function selectedBackgroundColor(color: string) {
  if (color == "Disponível") {
    return theme.colors.on;
  } else if (color == "Ocupado") {
    return theme.colors.busy;
  } else {
    return theme.colors.unavailable;
  }
}

type stateColor = {
  state: string;
};

export const ColorState = styled.View<stateColor>`
  width: ${createScale(8)};
  height: ${createScale(8)};
  border-radius: ${createScale(4)};
  background-color: ${(props) => selectedBackgroundColor(props.state)};
`;
