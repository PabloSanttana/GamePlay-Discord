import React from "react";
import { RectButtonProps } from "react-native-gesture-handler";
import { scale } from "react-native-size-matters";

import DuelSvg from "@src/assets/duel.svg";
import RankedSvg from "@src/assets/ranked.svg";
import TrainingSvg from "@src/assets/training.svg";
import FunSvg from "@src/assets/fun.svg";

import { Container, Icon, Title, Marker } from "./styles";

interface PropsCardPrimary extends RectButtonProps {
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

  return (
    <Container style={{ opacity: opacity }} {...rest}>
      <Icon asset={svgs[type]} width={scale(48)} height={scale(48)} />
      <Title>{titlesCard[type]}</Title>
      {markerShow && <Marker active={markerActive} />}
    </Container>
  );
}
