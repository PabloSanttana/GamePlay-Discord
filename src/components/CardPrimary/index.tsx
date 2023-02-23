import React from "react";

import { TouchableOpacityProps } from "react-native";
import { scale } from "react-native-size-matters";

import DuelSvg from "@src/assets/duel.svg";
import RankedSvg from "@src/assets/ranked.svg";
import TrainingSvg from "@src/assets/training.svg";
import FunSvg from "@src/assets/fun.svg";

import { Container, Icon, Title, Marker, Content } from "./styles";
import { useTheme } from "styled-components";

interface PropsCardPrimary extends TouchableOpacityProps {
  type: "duel" | "ranked" | "training" | "fun";
  markerShow?: boolean;
  markerActive?: boolean;
}

const svgs = {
  duel: DuelSvg,
  ranked: RankedSvg,
  training: TrainingSvg,
  fun: FunSvg,
};

const titlesCard = {
  duel: "Duelo 1x1",
  ranked: "Ranqueada",
  training: "Treino",
  fun: "Diversão",
};

export function CardPrimary({
  type,
  markerShow = false,
  markerActive = false,
  ...rest
}: PropsCardPrimary) {
  var opacity = 1;

  if (markerShow) {
    opacity = markerActive ? 1 : 0.6;
  }

  const theme = useTheme();

  return (
    <Content colors={[theme.colors.secondary50, theme.colors.secondary70]}>
      <Container activeOpacity={0.8} style={{ opacity: opacity }} {...rest}>
        <Icon asset={svgs[type]} width={scale(48)} height={scale(48)} />
        <Title>{titlesCard[type]}</Title>
        {markerShow && <Marker active={markerActive} />}
      </Container>
    </Content>
  );
}
