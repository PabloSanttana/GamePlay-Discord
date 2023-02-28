import React, { useEffect, useState, useCallback } from "react";
import { FlatList, View, Text } from "react-native";
import { useNavigation, useFocusEffect } from "@react-navigation/native";

import { Background } from "@src/components/Background";
import { Category } from "@src/components/Category";
import { Profile } from "@src/components/Profile";
import { HeaderList } from "@src/components/HeaderList";
import { CardSecundary } from "@src/components/CardSecundary";

import { ListDivider } from "@src/components/ListDivider";
import { HomeContainer, ListEmpty, ListEmptyTitle } from "./styles";
import { AppointmentProps, getAppointment } from "@src/services/storage";
import { Load } from "@src/components/Load";
import { Logout } from "@src/components/Logout";
import { useAuth } from "@src/hooks/auth";

export function Home() {
  const navigation = useNavigation();
  const { logout } = useAuth();
  const [category, setCategory] = useState("");
  const [guilds, setGuilds] = useState<AppointmentProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [islogout, setIsLogout] = useState(false);

  useFocusEffect(
    useCallback(() => {
      getStorageAppointment();
    }, [category])
  );

  async function getStorageAppointment() {
    const response = (await getAppointment()) as AppointmentProps[];

    if (category !== "") {
      setGuilds(response.filter((item) => item.category === category));
    } else {
      setGuilds(response);
    }
    setLoading(false);
  }

  function handleCategorySelect(categoryId: string) {
    categoryId === category ? setCategory("") : setCategory(categoryId);
  }

  function handleSelectedSevice(item: AppointmentProps) {
    //@ts-ignore

    navigation.navigate("Details", { data: item });
  }

  async function handleLogout(value: boolean) {
    if (value) {
      logout();
      setIsLogout(false);
    } else {
      setIsLogout(false);
    }
  }

  if (loading) {
    return <Load />;
  }

  return (
    <Background>
      <HomeContainer>
        <Profile setIsLogout={() => setIsLogout(true)} />
        <Category
          categorySelected={category}
          setCategory={handleCategorySelect}
          markerShow={true}
        />

        <HeaderList
          title="Partidas agendadas"
          subtitle={`Total ${guilds.length}`}
        />
        <FlatList
          keyExtractor={(item) => item.id}
          data={guilds}
          renderItem={({ item }) => (
            <CardSecundary
              data={item}
              onPress={() => handleSelectedSevice(item)}
            />
          )}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => <ListDivider />}
          contentContainerStyle={{ paddingBottom: 69 }}
          ListEmptyComponent={({}) => (
            <ListEmpty>
              <ListEmptyTitle>Você não tem agendamentos.</ListEmptyTitle>
            </ListEmpty>
          )}
        />
      </HomeContainer>
      <Logout
        handleSelected={handleLogout}
        visible={islogout}
        style={{ marginTop: 500 }}
      >
        <ListEmptyTitle>Você não tem agendamentos.</ListEmptyTitle>
      </Logout>
    </Background>
  );
}
