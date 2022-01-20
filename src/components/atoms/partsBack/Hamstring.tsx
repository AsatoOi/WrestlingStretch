import { memo, VFC } from "react";
import { Image } from "@chakra-ui/react";
import { useRecoilState } from "recoil";

import hamstring from "../../../data/img/bodyBack/Hamstring.png";
import hamstringY from "../../../data/img/bodyBack/HamstringY.png";
import { partsState } from "../../../store/partsState";
import { BooleanFalse } from "../../../data/Boolean.js";

export const Hamstring: VFC = memo(() => {
  const [partsBoolean, setPartsBoolean] = useRecoilState(partsState);
  const onClickHamstringTrue = () => {
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
      true,
      false,
    ]);
  };
  const onClickHamstringFalse = () => {
    setPartsBoolean(BooleanFalse);
  };
  return partsBoolean[9] === false ? (
    <Image
      src={hamstring}
      alt="四頭筋のイラスト"
      position="absolute"
      h={{ base: "4.3rem", md: "8rem" }}
      left={{ base: "29.1%", md: "29.8%" }}
      top="57%"
      opacity={1}
      _hover={{ opacity: 0.8 }}
      onClick={onClickHamstringTrue}
    />
  ) : (
    <Image
      src={hamstringY}
      alt="四頭筋のイラスト"
      position="absolute"
      h={{ base: "4.3rem", md: "8rem" }}
      left={{ base: "29.1%", md: "29.8%" }}
      top="57%"
      onClick={onClickHamstringFalse}
    />
  );
});
