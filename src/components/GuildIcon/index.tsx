import React from "react";

import { ContainerImage } from "./styles";
import DiscordPng from "@src/assets/discord.png";

const { CDN_IMAGE } = process.env;
interface PropsGuildIcon {
  iconId: string;
  guildId: string;
}

export function GuildIcon({ iconId, guildId }: PropsGuildIcon) {
  if (iconId !== "") {
    const uri = `${CDN_IMAGE}/icons/${guildId}/${iconId}.png`;
    return <ContainerImage resizeMode="cover" source={{ uri }} />;
  } else {
    return <ContainerImage source={DiscordPng} resizeMode="cover" />;
  }
}
