import { memo, VFC } from "react";

import { Image } from "@chakra-ui/react";
import { useRecoilState } from "recoil";

import pectoralis from "../../../data/img/bodyFront/Pectoralis.png";
import pectoralisY from "../../../data/img/bodyFront/PectoralisY.png";
import { partsState } from "../../../store/partsState";
import { BooleanFalse } from "../../../data/Boolean.js";

export const Pectoralis: VFC = memo(() => {
  const [partsBoolean, setPartsBoolean] = useRecoilState(partsState);
  const onClickPectoralisTrue = () => {
    setPartsBoolean([
      true,
      false,
      false,
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
  const onClickPectoralisFalse = () => {
    setPartsBoolean(BooleanFalse);
  };
  return partsBoolean[0] === false ? (
    <Image
      src={pectoralis}
      zIndex={3}
      alt="胸のイラスト"
      position="absolute"
      h={{ base: "3rem", md: "5.8rem" }}
      left={{ base: "26.5%", md: "25.5%" }}
      top="19.5%"
      opacity={1}
      _hover={{ opacity: 0.8 }}
      onClick={onClickPectoralisTrue}
    />
  ) : (
    <Image
      src={pectoralisY}
      zIndex={3}
      alt="胸のイラスト"
      position="absolute"
      h={{ base: "3rem", md: "5.8rem" }}
      left={{ base: "26.5%", md: "25.5%" }}
      top="19.5%"
      onClick={onClickPectoralisFalse}
    />
  );
});
