import React, { useState, useContext, createContext, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import * as AuthSession from "expo-auth-session";

import { theme } from "@src/themes/theme";

const { CLIENT_ID } = process.env;
const { CDN_IMAGE } = process.env;
const { REDIRECT_URL } = process.env;
const { RESPONSE_TYPE } = process.env;
const { SCOPE } = process.env;

import { api } from "@src/services/api";
import { getUserAuth, setUserAuth } from "@src/services/storage";

export type UserProps = {
  id: string;
  username: string;
  firstName: string;
  avatar: string;
  email: string;
  token: string;
};

type AuthContextData = {
  user: UserProps;
  signIn: () => Promise<void>;
  loading: boolean;
};

type AuthProviderProps = {
  children: React.ReactNode;
};

type AuthorizationResponse = AuthSession.AuthSessionResult & {
  params: {
    access_token?: string;
    error?: string;
  };
};

export const AuthContext = createContext({} as AuthContextData);

function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<UserProps>({} as UserProps);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    handleGetUserAuth();
  }, []);

  async function handleGetUserAuth() {
    try {
      setLoading(true);
      const response = await getUserAuth();
      if (response) {
        api.defaults.headers.authorization = `Bearer ${response.token}`;
        setUser(response);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  async function signIn() {
    try {
      setLoading(true);

      const authUrl = `${api.defaults.baseURL}/oauth2/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URL}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`;

      const { params, type } = (await AuthSession.startAsync({
        authUrl,
      })) as AuthorizationResponse;

      if (type === "success" && !params.error) {
        api.defaults.headers.authorization = `Bearer ${params.access_token}`;

        const userInfo = await api.get("users/@me");

        const firstName = userInfo.data.username.split(" ")[0];
        userInfo.data.avatar = `${CDN_IMAGE}/avatars/${userInfo.data.id}/${userInfo.data.avatar}.png`;

        const dataUser = {
          ...userInfo.data,
          firstName,
          token: params.access_token,
        };

        await setUserAuth(dataUser);
        setUser(dataUser);
      }
    } catch (error) {
      throw new Error("Não foi possível autenticar");
    } finally {
      setLoading(false);
    }
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        signIn,
        loading,
      }}
    >
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  return context;
}

export { AuthProvider, useAuth };
