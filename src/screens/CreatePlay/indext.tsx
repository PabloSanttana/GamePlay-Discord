import React, { useRef, useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { KeyboardAvoidingView, Platform } from "react-native";

import { Background } from "@src/components/Background";
import { Category } from "@src/components/Category";
import { Header } from "@src/components/Header";

import {
  Container,
  SelectedService,
  SelectedServiceImage,
  SelectedServiceTitle,
  SectionForm,
  FormRow,
  Separador,
  Textarea,
  ContainerButton,
  Content,
} from "./styles";

import UserImage from "@src/assets/user.png";
import { useTheme } from "styled-components";
import { Input } from "../../components/Input/index";

import { Button } from "@src/components/Button";

export function CreatePlay() {
  const myScrollView = useRef(null);
  const theme = useTheme();
  const [category, setCategory] = useState("");

  function handleSelectCategory(value: string) {
    category === value ? setCategory("") : setCategory(value);
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
            <SelectedService activeOpacity={0.7}>
              <SelectedServiceImage source={UserImage} />
              <SelectedServiceTitle>Selecione um servidor</SelectedServiceTitle>
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
      </Background>
    </KeyboardAvoidingView>
  );
}
