import React, { useState } from "react";

import { View } from "react-native";
import { Header } from "@src/components/Header";

import { HomeContainer } from "./styles";
import { Background } from "@src/components/Background";
import { Category } from "@src/components/Category";
import { CardSecundary } from "../../components/CardSecundary/index";

export function Home() {
  const [category, setCategory] = useState("");

  function handleCategorySelect(categoryId: string) {
    categoryId === category ? setCategory("") : setCategory(categoryId);
  }

  return (
    <Background>
      <HomeContainer>
        <Header />
        <Category
          categorySelected={category}
          setCategory={handleCategorySelect}
          markerShow={false}
        />

        <View style={{ flex: 1 }}>
          <CardSecundary />
          <CardSecundary />
        </View>
      </HomeContainer>
    </Background>
  );
}
