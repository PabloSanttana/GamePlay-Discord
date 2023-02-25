import React, { useRef, useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { KeyboardAvoidingView, Platform } from "react-native";

import { Background } from "@src/components/Background";
import { Category } from "@src/components/Category";
import { Header } from "@src/components/Header";

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

import UserImage from "@src/assets/user.png";
import { useTheme } from "styled-components";
import { Input } from "../../components/Input";

import { Button } from "@src/components/Button";
import { Guilds } from "@src/components/Guilds";
import { ModalView } from "@src/components/ModalView";
import { GuildProps } from "../../components/Guild";
import { GuildIcon } from "@src/components/GuildIcon";

export function CreatePlay() {
  const myScrollView = useRef(null);
  const theme = useTheme();
  const [category, setCategory] = useState("");
  const [openGuildsModal, setOpenGuildsModal] = useState(false);
  const [guild, setGuild] = useState<GuildProps>({} as GuildProps);

  function handleSelectCategory(value: string) {
    category === value ? setCategory("") : setCategory(value);
  }

  function handleOpenGuilds() {
    setOpenGuildsModal(true);
  }

  function handleGuildSelect(guildSelect: GuildProps) {
    console.log(guildSelect);
    setOpenGuildsModal(false);
    setGuild(guildSelect);
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
                <GuildIcon icon={guild.icon} />
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
                />
                <Separador style={{ marginLeft: -10, marginRight: 3 }}>
                  /
                </Separador>
                <Input maxLength={2} keyboardType="numbers-and-punctuation" />
              </FormRow>
              <FormRow style={{ marginLeft: 50 }}>
                <Input
                  label="Horário"
                  maxLength={2}
                  keyboardType="numbers-and-punctuation"
                />
                <Separador>:</Separador>
                <Input maxLength={2} keyboardType="numbers-and-punctuation" />
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
              <Button title="Agendar" />
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
