import React, { useState } from "react";

import { useNavigation } from "@react-navigation/native";

import { HomeContainer } from "./styles";
import { Background } from "@src/components/Background";
import { Category } from "@src/components/Category";
import { Profile } from "@src/components/Profile";
import { ListCard } from "@src/components/ListCard";

export function Home() {
  const navigation = useNavigation();
  const [category, setCategory] = useState("");

  function handleCategorySelect(categoryId: string) {
    categoryId === category ? setCategory("") : setCategory(categoryId);
  }

  function handleSelectedSevice() {
    //@ts-ignore
    navigation.navigate("Details");
  }

  return (
    <Background>
      <HomeContainer>
        <Profile />
        <Category
          categorySelected={category}
          setCategory={handleCategorySelect}
          markerShow={false}
        />

        <ListCard
          titleHeader="Partidas agendadas"
          onPress={handleSelectedSevice}
        />
      </HomeContainer>
    </Background>
  );
}
