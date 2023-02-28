import React, { useRef, useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { Alert, KeyboardAvoidingView, Platform } from "react-native";
import uuid from "react-native-uuid";
import { useNavigation } from "@react-navigation/native";
import { parse, isValid } from "date-fns";
import { ptBR } from "date-fns/locale";

import {
  Container,
  SelectedService,
  SelectedServiceTitle,
  SectionForm,
  FormRow,
  Separador,
  Textarea,
  ContainerButton,
  Content,
  SelectedServiceSubTitle,
  ContainerGuildSelect,
  CardImage,
} from "./styles";

import { useTheme } from "styled-components";
import { Input } from "../../components/Input";

import { Button } from "@src/components/Button";
import { Guilds } from "@src/components/Guilds";
import { ModalView } from "@src/components/ModalView";
import { GuildProps } from "../../components/Guild";
import { GuildIcon } from "@src/components/GuildIcon";
import { setAppointment, AppointmentProps } from "@src/services/storage";
import { Background } from "@src/components/Background";
import { Category } from "@src/components/Category";
import { Header } from "@src/components/Header";

export function Appointment() {
  const navigation = useNavigation();
  const myScrollView = useRef(null);
  const theme = useTheme();
  const [category, setCategory] = useState("");
  const [openGuildsModal, setOpenGuildsModal] = useState(false);
  const [guild, setGuild] = useState<GuildProps>({} as GuildProps);

  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [hours, setHours] = useState("");
  const [minutes, setMinutes] = useState("");
  const [description, setDescription] = useState("");

  function handleSelectCategory(value: string) {
    category === value ? setCategory("") : setCategory(value);
  }

  function handleOpenGuilds() {
    setOpenGuildsModal(true);
  }

  function handleGuildSelect(guildSelect: GuildProps) {
    setOpenGuildsModal(false);
    setGuild(guildSelect);
  }

  async function handleSubmit() {
    try {
      if (!guild.id) {
        Alert.alert("Selecione um servidor");
        return;
      }
      if (!(hours >= "0" && hours <= "23")) {
        Alert.alert("Hora inválida");
        return;
      }
      if (!(minutes >= "0" && minutes <= "59")) {
        Alert.alert("Hora inválida");
        return;
      }
      if (category == "") {
        Alert.alert("Selecione uma categoria");
        return;
      }

      const year = new Date().getFullYear();
      const parsed = parse(`${day}/${month}/${year}`, "P", new Date(), {
        locale: ptBR,
      });

      if (!isValid(parsed)) {
        Alert.alert("Data inválida");
        return;
      }

      const newAppointment = {
        id: uuid.v4(),
        guild,
        category,
        date: `${day}/${month} às ${hours}/${minutes}h`,
        description: description,
      } as AppointmentProps;
      await setAppointment(newAppointment);
      navigation.goBack();
    } catch (error) {
      Alert.alert("Erro, Tente novamente");
    }
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <Background>
        <Header title="Agendar partida" />
        <Container ref={myScrollView}>
          <Category
            showTitle
            markerShow
            categorySelected={category}
            setCategory={handleSelectCategory}
          />
          <Content>
            <SelectedService activeOpacity={0.7} onPress={handleOpenGuilds}>
              {guild.icon ? (
                <GuildIcon iconId={guild.icon} guildId={guild.id} />
              ) : (
                <CardImage
                  colors={[theme.colors.secondary50, theme.colors.secondary70]}
                />
              )}

              <ContainerGuildSelect>
                <SelectedServiceTitle>
                  {guild.name ? guild.name : "Selecione um servidor"}
                </SelectedServiceTitle>
                {guild.game && (
                  <SelectedServiceSubTitle>
                    {guild.game}
                  </SelectedServiceSubTitle>
                )}
              </ContainerGuildSelect>

              <MaterialIcons
                name="navigate-next"
                size={24}
                color={theme.colors.heading}
              />
            </SelectedService>

            <SectionForm>
              <FormRow>
                <Input
                  label="Dia e mês"
                  maxLength={2}
                  keyboardType="numbers-and-punctuation"
                  onChangeText={setDay}
                />
                <Separador style={{ marginLeft: -10, marginRight: 3 }}>
                  /
                </Separador>
                <Input
                  maxLength={2}
                  keyboardType="numbers-and-punctuation"
                  onChangeText={setMonth}
                />
              </FormRow>
              <FormRow style={{ marginLeft: 50 }}>
                <Input
                  label="Horário"
                  maxLength={2}
                  keyboardType="numbers-and-punctuation"
                  onChangeText={setHours}
                />
                <Separador>:</Separador>
                <Input
                  maxLength={2}
                  keyboardType="numbers-and-punctuation"
                  onChangeText={setMinutes}
                />
              </FormRow>
            </SectionForm>
            <Textarea>
              <Input
                label="Descrição"
                info="Max 100 caracteres"
                maxLength={100}
                fullWidth={true}
                multiline={true}
                numberOfLines={5}
                autoCorrect={false}
                onChangeText={setDescription}
                style={{ textAlignVertical: "top" }}
                onFocus={() =>
                  //@ts-ignore
                  myScrollView?.current?.scrollTo({
                    x: 0,
                    y: 200,
                    animated: true,
                  })
                }
              />
            </Textarea>

            <ContainerButton>
              <Button title="Agendar" onPress={handleSubmit} />
            </ContainerButton>
          </Content>
        </Container>

        <ModalView visible={openGuildsModal}>
          <Guilds handleGuildSelect={handleGuildSelect} />
        </ModalView>
      </Background>
    </KeyboardAvoidingView>
  );
}
