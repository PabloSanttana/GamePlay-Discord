import React, { useState } from "react";
import { FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Background } from "@src/components/Background";
import { Category } from "@src/components/Category";
import { Profile } from "@src/components/Profile";
import { HeaderList } from "@src/components/HeaderList";
import { CardSecundary } from "@src/components/CardSecundary";
import { HomeContainer } from "./styles";
import { ListDivider } from "@src/components/ListDivider";

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

  const data = [];

  return (
    <Background>
      <HomeContainer>
        <Profile />
        <Category
          categorySelected={category}
          setCategory={handleCategorySelect}
          markerShow={false}
        />

        <HeaderList
          title="Partidas agendadas"
          subtitle={`Total ${data.length}`}
        />
        <FlatList
          keyExtractor={(item) => item.id}
          data={data}
          renderItem={({ item }) => (
            <CardSecundary onPress={handleSelectedSevice} />
          )}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => <ListDivider />}
          contentContainerStyle={{ paddingBottom: 69 }}
        />
      </HomeContainer>
    </Background>
  );
}
