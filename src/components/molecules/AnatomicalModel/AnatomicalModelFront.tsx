import { memo, VFC } from "react";

import { Box, Image } from "@chakra-ui/react";
import { useRecoilState } from "recoil";

import face from "../../../data/img/bodyFront/face.png";
import hands from "../../../data/img/bodyFront/hands.png";
import legs from "../../../data/img/bodyFront/legs.png";
import { partsState } from "../../../store/partsState";
import { Pectoralis } from "../../atoms/partsFront/Pectoralis";
import { Deltoid } from "../../atoms/partsFront/Deltoid";
import { Biceps } from "../../atoms/partsFront/Biceps";
import { Arms } from "../../atoms/partsFront/Arm";
import { Abdominal } from "../../atoms/partsFront/Abdominal";
import { Quadriceps } from "../../atoms/partsFront/Quadriceps";

export const AnatomicalModelFront: VFC = memo(() => {
  const [partsBoolean, setPartsBoolean] = useRecoilState(partsState);

  return (
    <Box
      h={{ base: "24rem", md: "44rem" }}
      w={{ base: "14rem", md: "24rem" }}
      mr={{ base: "none", md: 6, lg: 12 }}
      position="relative"
    >
      <Image
        src={face}
        alt="顔のイラスト"
        position="absolute"
        h={{ base: "4.5rem", md: "8rem" }}
        left={{ base: "36%", md: "38%" }}
      />
      <Pectoralis />
      <Deltoid />
      <Biceps />
      <Arms />
      <Image
        src={hands}
        alt="手のイラスト"
        position="absolute"
        h={{ base: "2.4rem", md: "4.4rem" }}
        left={{ base: "12.5%", md: "11.8%" }}
        top="57.5%"
      />
      <Abdominal />
      <Quadriceps />
      <Image
        src={legs}
        alt="足のイラスト"
        position="absolute"
        h={{ base: "5.7rem", md: "10.7rem" }}
        left={{ base: "29.8%", md: "29.5%" }}
        top="75.5%"
      />
    </Box>
  );
});
