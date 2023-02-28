import styled from "styled-components/native";
import { createScale } from "@src/utils/createScale";
import { LinearGradient } from "expo-linear-gradient";

export const Container = styled.ScrollView`
  flex: 1;
`;
export const Content = styled.View`
  flex: 1;
  margin: 0px ${createScale(24)};
`;

export const SelectedService = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  height: ${createScale(68)};
  border-radius: ${createScale(8)};
  border-width: ${createScale(1)};
  border-color: ${(props) => props.theme.colors.secondary50};
  padding-right: ${createScale(20)};
`;

export const CardImage = styled(LinearGradient)`
  width: ${createScale(64)};
  height: 100%;
  border-radius: ${createScale(8)};
  border-color: ${(props) => props.theme.colors.secondary50};
  border-width: ${createScale(1)};
`;

export const ContainerGuildSelect = styled.View`
  margin-left: ${createScale(20)};
  margin-right: auto; ;
`;

export const SelectedServiceTitle = styled.Text`
  font-family: ${(props) => props.theme.fonts.title700};
  font-size: ${createScale(18)};
  color: ${(props) => props.theme.colors.heading};
`;

export const SelectedServiceSubTitle = styled.Text`
  font-family: ${(props) => props.theme.fonts.text400};
  font-size: ${createScale(13)};
  color: ${(props) => props.theme.colors.heading};
`;

export const SectionForm = styled.View`
  flex: 1;
  margin-top: ${createScale(24)};
  flex-direction: row;
  justify-content: space-between;
`;

export const FormRow = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
`;

export const Separador = styled.Text`
  font-family: ${(props) => props.theme.fonts.text500};
  font-size: ${createScale(15)};
  color: ${(props) => props.theme.colors.heading};
  margin-bottom: ${createScale(16)};
`;

export const Textarea = styled.View`
  flex: 1;
  margin-top: ${createScale(24)};
  margin-bottom: 10px;
`;

export const ContainerButton = styled.View`
  flex: 1;
  margin-top: ${createScale(16)};
  margin-bottom: ${createScale(50)};
`;
