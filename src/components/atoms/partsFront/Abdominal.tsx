import { memo, VFC } from "react";
import { Image } from "@chakra-ui/react";
import { useRecoilState } from "recoil";

import abdominal from "../../../data/img/bodyFront/Abdominal.png";
import abdominalY from "../../../data/img/bodyFront/AbdominalY.png";
import { partsState } from "../../../store/partsState";
import { BooleanFalse } from "../../../data/Boolean.js";

type Props = {
  scroll: () => void;
};

export const Abdominal: VFC<Props> = memo(({ scroll }) => {
  const [partsBoolean, setPartsBoolean] = useRecoilState(partsState);
  const onClickAbdominalTrue = () => {
    scroll();
    setPartsBoolean([
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
      false,
    ]);
  };
  const onClickAbdominalFalse = () => {
    setPartsBoolean(BooleanFalse);
  };
  return partsBoolean[4] === false ? (
    <Image
      src={abdominal}
      alt="腹筋のイラスト"
      zIndex={2}
      position="absolute"
      h={{ base: "5.3rem", md: "9.7rem" }}
      left={{ base: "30%", md: "30.7%" }}
      top="31.7%"
      opacity={1}
      _hover={{ opacity: 0.8 }}
      onClick={onClickAbdominalTrue}
    />
  ) : (
    <Image
      src={abdominalY}
      alt="腹筋のイラスト"
      zIndex={2}
      position="absolute"
      h={{ base: "5.3rem", md: "9.7rem" }}
      left={{ base: "30%", md: "30.7%" }}
      top="31.7%"
      onClick={onClickAbdominalFalse}
    />
  );
});
