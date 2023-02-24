import React from "react";

import { ContainerImage } from "./styles";

interface PropsAvatar {
  avatar_url: string;
}

export function Avatar({ avatar_url }: PropsAvatar) {
  return <ContainerImage source={{ uri: avatar_url }} />;
}
