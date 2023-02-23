import React from "react";

import { FlatList } from "react-native";
import { Container, HeaderSubtitle, HeaderList, HeaderTitle } from "./styles";
import { CardSecundary } from "../CardSecundary/index";

interface PropsListCard {
  onPress: () => void;
  titleHeader: string;
}

export function ListCard({ onPress, titleHeader }: PropsListCard) {
  return (
    <Container>
      <HeaderList>
        <HeaderTitle>{titleHeader}</HeaderTitle>
        <HeaderSubtitle>Total 3</HeaderSubtitle>
      </HeaderList>

      <FlatList
        data={[1, 2]}
        renderItem={({ item }) => <CardSecundary onPress={onPress} />}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  );
}
