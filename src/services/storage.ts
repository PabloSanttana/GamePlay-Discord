import AsyncStorage from "@react-native-async-storage/async-storage";
import { GuildProps } from "@src/components/Guild";

import { UserProps } from "../hooks/auth";

const app = "@gameplay";

export type AppointmentProps = {
  id: string;
  guild: GuildProps;
  category: string;
  date: string;
  description: string;
};

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

export async function setAppointment(Appointment: AppointmentProps) {
  try {
    const storage = await getAppointment();
    //@ts-ignore
    const appointments = [...storage, Appointment];
    const jsonAppointments = JSON.stringify(appointments);
    await AsyncStorage.setItem(app + "_Appointments", jsonAppointments);
  } catch (error) {
    throw new Error("Não foi possível salvar.");
  }
}

export async function getAppointment(): Promise<AppointmentProps | []> {
  try {
    const appointments = await AsyncStorage.getItem(app + "_Appointments");
    return appointments ? JSON.parse(appointments) : [];
  } catch (error) {
    return [];
  }
}

export async function logoutAsyncStorage() {
  try {
    await AsyncStorage.removeItem(app + "_Appointments");
    await AsyncStorage.removeItem(app + "_user");
  } catch (error) {
    throw new Error();
  }
}
