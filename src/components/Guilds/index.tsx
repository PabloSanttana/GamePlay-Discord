import { FlatList } from "react-native";
import React from "react";

import { Container, Separador } from "./styles";
import { Guild } from "../Guild";

export function Guilds() {
  const guilds = [
    {
      id: "1",
      name: "Lendários",
      game: "League of Legends",
      icon: "https://avatars.githubusercontent.com/u/52142127?v=4",
      owner: true,
    },
    {
      id: "2",
      name: "Lendários",
      icon: "https://avatars.githubusercontent.com/u/52142127?v=4",
      owner: true,
      game: "League of Legends",
    },
  ];

  return (
    <Container>
      <FlatList
        data={guilds}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Guild title={item.name} game={item.game} icon={item.icon} />
        )}
        ItemSeparatorComponent={() => <Separador />}
      />
    </Container>
  );
}
