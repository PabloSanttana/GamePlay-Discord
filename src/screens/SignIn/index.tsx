import React from "react";
import { Alert, ActivityIndicator } from "react-native";
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
import { useAuth } from "@src/hooks/auth";
import { useTheme } from "styled-components";

export function SignIn() {
  const theme = useTheme();
  const { loading, signIn } = useAuth();

  async function handleSignIn() {
    try {
      await signIn();
    } catch (error) {
      //@ts-ignore
      Alert.alert(error);
    }
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
          {loading ? (
            <ActivityIndicator color={theme.colors.primary} />
          ) : (
            <Button
              icon
              title="Entrar no Discord"
              onPress={() => handleSignIn()}
            />
          )}
        </SignInContent>
      </SignInContainer>
    </Background>
  );
}
