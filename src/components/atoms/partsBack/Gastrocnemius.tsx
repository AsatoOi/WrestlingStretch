import { memo, VFC } from "react";
import { Image } from "@chakra-ui/react";
import { useRecoilState } from "recoil";

import gastrocnemius from "../../../data/img/bodyBack/Gastrocnemius.png";
import gastrocnemiusY from "../../../data/img/bodyBack/GastrocnemiusY.png";
import { partsState } from "../../../store/partsState";
import { BooleanFalse } from "../../../data/Boolean.js";

export const Gastrocnemius: VFC = memo(() => {
  const [partsBoolean, setPartsBoolean] = useRecoilState(partsState);
  const onClickGastrocnemiusTrue = () => {
    setPartsBoolean([
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
      true,
    ]);
  };
  const onClickGastrocnemiusFalse = () => {
    setPartsBoolean(BooleanFalse);
  };
  return partsBoolean[10] === false ? (
    <Image
      src={gastrocnemius}
      alt="腓腹筋のイラスト"
      position="absolute"
      h={{ base: "5.7rem", md: "10.8rem" }}
      left={{ base: "30%", md: "30.5%" }}
      top="75%"
      opacity={1}
      zIndex={1}
      _hover={{ opacity: 0.8 }}
      onClick={onClickGastrocnemiusTrue}
    />
  ) : (
    <Image
      src={gastrocnemiusY}
      alt="腓腹筋のイラスト"
      position="absolute"
      h={{ base: "5.7rem", md: "10.8rem" }}
      left={{ base: "30%", md: "30.5%" }}
      top="75%"
      zIndex={1}
      onClick={onClickGastrocnemiusFalse}
    />
  );
});
