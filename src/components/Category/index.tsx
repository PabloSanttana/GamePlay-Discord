import React from "react";
import { FlatList } from "react-native";
import { scale } from "react-native-size-matters";

import { FlatlistHorizontal, Title } from "./styles";
import { CardPrimary } from "@src/components/CardPrimary/index";

const data = ["ranked", "duel", "fun", "training"];
export type CategoryProps = "duel" | "ranked" | "training" | "fun";

interface PropsCategory {
  categorySelected: string;
  setCategory: (value: string) => void;
  markerShow?: boolean;
  showTitle?: boolean;
}

export function Category({
  setCategory,
  markerShow = false,
  categorySelected,
  showTitle = false,
}: PropsCategory) {
  return (
    <FlatlistHorizontal>
      {showTitle && <Title>Categoria</Title>}
      <FlatList
        data={data}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <CardPrimary
            markerShow={markerShow}
            markerActive={item === categorySelected}
            type={item as CategoryProps}
            onPress={() => setCategory(item)}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          height: scale(120),
          justifyContent: "center",
          marginLeft: scale(24),
          marginBottom: scale(30),
          marginTop: scale(10),
          paddingRight: 50,
        }}
      />
    </FlatlistHorizontal>
  );
}
