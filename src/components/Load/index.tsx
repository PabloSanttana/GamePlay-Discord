import React from "react";
import { useTheme } from "styled-components";

import { Contaner, Spinner } from "./styles";

export function Load() {
  const theme = useTheme();
  return (
    <Contaner>
      <Spinner size="large" color={theme.colors.primary} />
    </Contaner>
  );
}
