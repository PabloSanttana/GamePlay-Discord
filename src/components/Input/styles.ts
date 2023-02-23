import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";
import { createScale } from "../../utils/createScale";

export const Container = styled.View``;

type PropsInput = {
  fullWidth: boolean;
};

export const ContainerGradient = styled(LinearGradient)<PropsInput>`
  width: ${(props) => (props.fullWidth ? "100%" : createScale(60))};
  height: ${(props) => (props.fullWidth ? createScale(100) : createScale(48))};
  border-color: ${(props) => props.theme.colors.secondary30};
  border-width: ${createScale(1)};
  border-radius: ${createScale(8)};
  align-items: center;
  justify-content: center;
`;

export const InputText = styled.TextInput<PropsInput>`
  width: 100%;
  height: 100%;
  color: ${(props) => props.theme.colors.heading};
  font-size: ${(props) =>
    props.fullWidth ? createScale(13) : createScale(16)};
  font-family: ${(props) =>
    props.fullWidth ? props.theme.fonts.text400 : props.theme.fonts.title700};
  padding-left: ${(props) =>
    props.fullWidth ? createScale(16) : createScale(24)};
  background-color: transparent;
  padding-top: ${(props) =>
    props.fullWidth ? createScale(10) : createScale(0)};
`;

export const Label = styled.Text`
  color: ${(props) => props.theme.colors.heading};
  font-size: ${createScale(18)};
  font-family: ${(props) => props.theme.fonts.title700};
`;

export const InfoText = styled.Text`
  color: ${(props) => props.theme.colors.heading};
  font-size: ${createScale(13)};
  font-family: ${(props) => props.theme.fonts.text500};
  margin-left: auto;
`;

export const ContainerTexts = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: ${createScale(12)};
`;
