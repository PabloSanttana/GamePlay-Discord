import React from "react";
import { FlatList } from "react-native";
import { scale } from "react-native-size-matters";

import { FlatlistHorizontal } from "./styles";
import { CardPrimary } from "@src/components/CardPrimary/index";

const data = ["ranked", "duel", "fun", "training"];
type ItemProps = "duel" | "ranked" | "training" | "fun";

interface PropsCategory {
  categorySelected: string;
  setCategory: (value: string) => void;
  markerShow?: boolean;
}

export function Category({
  setCategory,
  markerShow = false,
  categorySelected,
}: PropsCategory) {
  return (
    <FlatlistHorizontal>
      <FlatList
        data={data}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <CardPrimary
            markerShow={markerShow}
            markerActive={item === categorySelected}
            type={item as ItemProps}
            onPress={() => setCategory(item)}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          height: scale(120),
          justifyContent: "center",
          marginLeft: scale(24),
          marginVertical: scale(30),
          paddingRight: 50,
        }}
      />
    </FlatlistHorizontal>
  );
}
