import { memo, VFC } from "react";
import { Box, Image } from "@chakra-ui/react";

import faceBack from "../../../data/img/bodyBack/face2.png";
import { Back } from "../../atoms/partsBack/Back";
import { DeltoidBack } from "../../atoms/partsBack/DeltoidBack";
import { Triceps } from "../../atoms/partsBack/Triceps";
import { ArmBack } from "../../atoms/partsBack/ArmBack";
import { Hip } from "../../atoms/partsBack/Hip";
import { Hamstring } from "../../atoms/partsBack/Hamstring";
import { Gastrocnemius } from "../../atoms/partsBack/Gastrocnemius";

export const AnatomicalModelBack: VFC = memo(() => {
  return (
    <Box
      h={{ base: "24rem", md: "44rem" }}
      w={{ base: "14rem", md: "24rem" }}
      ml={{ base: "none", md: 6, lg: 12 }}
      position="relative"
    >
      <Image
        src={faceBack}
        alt="顔後ろのイラスト"
        position="absolute"
        h={{ base: "4.5rem", md: "8rem" }}
        left={{ base: "36%", md: "38%" }}
      />
      <Back />
      <DeltoidBack />
      <Triceps />
      <ArmBack />
      <Hip />
      <Hamstring />
      <Gastrocnemius />
    </Box>
  );
});
