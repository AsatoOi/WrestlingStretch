import { memo, VFC } from "react";
import { Image } from "@chakra-ui/react";
import { useRecoilState } from "recoil";

import back from "../../../data/img/bodyBack/back.png";
import backY from "../../../data/img/bodyBack/backY.png";
import { partsState } from "../../../store/partsState";
import { BooleanFalse } from "../../../data/Boolean.js";

export const Back: VFC = memo(() => {
  const [partsBoolean, setPartsBoolean] = useRecoilState(partsState);
  const onClickBackTrue = () => {
    setPartsBoolean([
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
      false,
    ]);
  };
  const onClickBackFalse = () => {
    setPartsBoolean(BooleanFalse);
  };
  return partsBoolean[6] === false ? (
    <Image
      src={back}
      alt="背中のイラスト"
      position="absolute"
      h={{ base: "6rem", md: "11rem" }}
      left={{ base: "31%", md: "32.4%" }}
      top="20%"
      zIndex={2}
      opacity={1}
      _hover={{ opacity: 0.8 }}
      onClick={onClickBackTrue}
    />
  ) : (
    <Image
      src={backY}
      alt="背中のイラスト"
      position="absolute"
      h={{ base: "6rem", md: "11rem" }}
      left={{ base: "31%", md: "32.4%" }}
      top="20%"
      zIndex={2}
      onClick={onClickBackFalse}
    />
  );
});
