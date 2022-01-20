import { memo, VFC } from "react";
import { Image } from "@chakra-ui/react";
import { useRecoilState } from "recoil";

import biceps from "../../../data/img/bodyFront/Biceps.png";
import bicepsY from "../../../data/img/bodyFront/BicepsY.png";
import { partsState } from "../../../store/partsState";
import { BooleanFalse } from "../../../data/Boolean.js";

export const Biceps: VFC = memo(() => {
  const [partsBoolean, setPartsBoolean] = useRecoilState(partsState);
  const onClickBicepsTrue = () => {
    setPartsBoolean([
      false,
      false,
      true,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
    ]);
  };
  const onClickBicepsFalse = () => {
    setPartsBoolean(BooleanFalse);
  };
  return partsBoolean[2] === false ? (
    <Image
      src={biceps}
      alt="上腕のイラスト"
      position="absolute"
      h={{ base: "3.1rem", md: "5.6rem" }}
      left={{ base: "14.2%", md: "14.4%" }}
      top="29.4%"
      opacity={1}
      _hover={{ opacity: 0.8 }}
      onClick={onClickBicepsTrue}
    />
  ) : (
    <Image
      src={bicepsY}
      alt="上腕のイラスト"
      position="absolute"
      h={{ base: "3.1rem", md: "5.6rem" }}
      left={{ base: "14.2%", md: "14.4%" }}
      top="29.4%"
      onClick={onClickBicepsFalse}
    />
  );
});
