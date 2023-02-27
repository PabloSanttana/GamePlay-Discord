import { Alert, FlatList } from "react-native";
import React, { useEffect, useState } from "react";

import { Container } from "./styles";
import { Guild, GuildProps } from "../Guild";
import { ListDivider } from "@src/components/ListDivider";
import { Load } from "@src/components/Load";
import { api } from "@src/services/api";

type Props = {
  handleGuildSelect: (guild: GuildProps) => void;
};

export function Guilds({ handleGuildSelect }: Props) {
  const [guilds, setGuilds] = useState<GuildProps[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchGuilds();
  }, []);

  async function fetchGuilds() {
    try {
      const response = await api.get("/users/@me/guilds");

      setGuilds(response.data);
    } catch (error) {
      Alert.alert("Error, Tente novamente embreve.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <Container>
      {loading ? (
        <Load />
      ) : (
        <FlatList
          data={guilds}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Guild data={item} onPress={() => handleGuildSelect(item)} />
          )}
          ItemSeparatorComponent={() => <ListDivider />}
          contentContainerStyle={{ paddingBottom: 69 }}
        />
      )}
    </Container>
  );
}
