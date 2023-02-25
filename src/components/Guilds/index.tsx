import { FlatList } from "react-native";
import React from "react";

import { Container } from "./styles";
import { Guild, GuildProps } from "../Guild";
import { ListDivider } from "@src/components/ListDivider";

type Props = {
  handleGuildSelect: (guild: GuildProps) => void;
};

export function Guilds({ handleGuildSelect }: Props) {
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
          <Guild data={item} onPress={() => handleGuildSelect(item)} />
        )}
        ItemSeparatorComponent={() => <ListDivider />}
        contentContainerStyle={{ paddingBottom: 69 }}
      />
    </Container>
  );
}
