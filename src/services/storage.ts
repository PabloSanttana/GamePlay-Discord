import AsyncStorage from "@react-native-async-storage/async-storage";

import { UserProps } from "../hooks/auth";

const app = "@gameplay";

export async function getUserAuth(): Promise<UserProps | null> {
  try {
    const jsonUser = await AsyncStorage.getItem(app + "_user");
    return jsonUser != null ? JSON.parse(jsonUser) : null;
  } catch (error) {
    return null;
  }
}

export async function setUserAuth(user: UserProps) {
  try {
    const jsonUser = JSON.stringify(user);
    await AsyncStorage.setItem(app + "_user", jsonUser);
  } catch (error) {
    throw new Error("Não foi possível salvar.");
  }
}
