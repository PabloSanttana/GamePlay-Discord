import React from "react";
import {
  SignInContainer,
  SignInContent,
  SignInImage,
  SignInTitle,
  SignInSubTitle,
} from "./styles";

import Illustration from "@src/assets/illustration.png";
import { Button } from "@src/components/Button";
import { Background } from "@src/components/Background";
import { useNavigation } from "@react-navigation/native";

export function SignIn() {
  const navigation = useNavigation();

  function handleSignIn() {
    //@ts-ignore
    navigation.navigate("Home");
  }

  return (
    <Background>
      <SignInContainer>
        <SignInImage source={Illustration} resizeMode="stretch" />
        <SignInContent>
          <SignInTitle>Conecte-se e organize suas jogatinas</SignInTitle>
          <SignInSubTitle>
            Crie grupos para jogar seus games favoritos com seus amigos
          </SignInSubTitle>
          <Button
            icon
            title="Entrar no Discord"
            onPress={() => handleSignIn()}
          />
        </SignInContent>
      </SignInContainer>
    </Background>
  );
}
