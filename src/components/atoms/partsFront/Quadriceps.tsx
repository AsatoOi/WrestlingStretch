import { memo, VFC } from "react";
import { Image } from "@chakra-ui/react";
import { useRecoilState } from "recoil";

import quadriceps from "../../../data//img/bodyFront/Quadriceps.png";
import quadricepsY from "../../../data//img/bodyFront/QuadricepsY.png";
import { partsState } from "../../../store/partsState";
import { BooleanFalse } from "../../../data/Boolean.js";

export const Quadriceps: VFC = memo(() => {
  const [partsBoolean, setPartsBoolean] = useRecoilState(partsState);
  const onClickQuadricepsTrue = () => {
    setPartsBoolean([
      false,
      false,
      false,
      false,
      false,
      true,
      false,
      false,
      false,
      false,
      false,
    ]);
  };
  const onClickQuadricepsFalse = () => {
    setPartsBoolean(BooleanFalse);
  };
  return partsBoolean[5] === false ? (
    <Image
      src={quadriceps}
      alt="四頭筋のイラスト"
      position="absolute"
      h={{ base: "6rem", md: "11.4rem" }}
      left={{ base: "27.5%", md: "26.5%" }}
      top="49.5%"
      opacity={1}
      _hover={{ opacity: 0.8 }}
      onClick={onClickQuadricepsTrue}
    />
  ) : (
    <Image
      src={quadricepsY}
      alt="四頭筋のイラスト"
      position="absolute"
      h={{ base: "6rem", md: "11.4rem" }}
      left={{ base: "27.5%", md: "26.5%" }}
      top="49.5%"
      onClick={onClickQuadricepsFalse}
    />
  );
});
