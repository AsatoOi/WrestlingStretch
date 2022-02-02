import { memo, VFC } from "react";
import { Image } from "@chakra-ui/react";
import { useRecoilState } from "recoil";

import deltoid from "../../../data/img/bodyFront/Deltoid.png";
import deltoidY from "../../../data/img/bodyFront/DeltoidY.png";
import { partsState } from "../../../store/partsState";
import { BooleanFalse } from "../../../data/Boolean.js";

export const Deltoid: VFC = memo(() => {
  const [partsBoolean, setPartsBoolean] = useRecoilState(partsState);
  const onClickDeltoidTrue = () => {
    setPartsBoolean([
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
      false,
    ]);
  };
  const onClickDeltoidFalse = () => {
    setPartsBoolean(BooleanFalse);
  };
  return partsBoolean[1] === false ? (
    <Image
      src={deltoid}
      alt="肩のイラスト"
      position="absolute"
      h={{ base: "2.8rem", md: "5rem" }}
      left={{ base: "14%", md: "14.3%" }}
      top="19.5%"
      opacity={1}
      zIndex={1}
      _hover={{ opacity: 0.8 }}
      onClick={onClickDeltoidTrue}
    />
  ) : (
    <Image
      src={deltoidY}
      alt="肩のイラスト"
      position="absolute"
      h={{ base: "2.8rem", md: "5rem" }}
      left={{ base: "14%", md: "14.3%" }}
      top="19.5%"
      zIndex={1}
      onClick={onClickDeltoidFalse}
    />
  );
});
