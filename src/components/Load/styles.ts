import styled from "styled-components/native";

export const Contaner = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Spinner = styled.ActivityIndicator`
  color: ${(props) => props.theme.colors.primary};
`;
