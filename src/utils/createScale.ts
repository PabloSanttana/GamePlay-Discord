import { scale } from "react-native-size-matters";

export function createScale(number: number): string {
  return scale(number) + "px";
}
