import React from "react";

import { ContainerImage } from "./styles";

interface PropsGuildIcon {
  icon: string;
}

export function GuildIcon({ icon }: PropsGuildIcon) {
  return <ContainerImage source={{ uri: icon }} />;
}
