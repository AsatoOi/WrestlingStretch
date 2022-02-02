import { memo, VFC } from "react";
import { Image } from "@chakra-ui/react";
import { useRecoilState } from "recoil";

import triceps from "../../../data/img/bodyBack/Triceps.png";
import tricepsY from "../../../data/img/bodyBack/TricepsY.png";
import { partsState } from "../../../store/partsState";
import { BooleanFalse } from "../../../data/Boolean.js";

export const Triceps: VFC = memo(() => {
  const [partsBoolean, setPartsBoolean] = useRecoilState(partsState);
  const onClickTricepsTrue = () => {
    setPartsBoolean([
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      true,
      false,
      false,
      false,
    ]);
  };
  const onClickTricepsFalse = () => {
    setPartsBoolean(BooleanFalse);
  };
  return partsBoolean[7] === false ? (
    <Image
      src={triceps}
      alt="上腕後ろのイラスト"
      position="absolute"
      h={{ base: "3rem", md: "5.6rem" }}
      left={{ base: "14.1%", md: "12.8%" }}
      top="29.8%"
      opacity={1}
      zIndex={1}
      _hover={{ opacity: 0.8 }}
      onClick={onClickTricepsTrue}
    />
  ) : (
    <Image
      src={tricepsY}
      alt="上腕後ろのイラスト"
      position="absolute"
      h={{ base: "3rem", md: "5.6rem" }}
      left={{ base: "14.1%", md: "12.8%" }}
      top="29.8%"
      zIndex={1}
      onClick={onClickTricepsFalse}
    />
  );
});
