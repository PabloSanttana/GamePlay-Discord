import React, { ReactNode } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { useTheme } from "styled-components";

type PropsBackground = {
  children: ReactNode;
};

export function Background({ children }: PropsBackground) {
  const theme = useTheme();
  return (
    <LinearGradient
      colors={[theme.colors.secondary80, theme.colors.secondary100]}
      style={{ flex: 1 }}
    >
      {children}
    </LinearGradient>
  );
}
