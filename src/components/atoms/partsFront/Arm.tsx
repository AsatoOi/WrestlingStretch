import { memo, VFC } from "react";
import { Image } from "@chakra-ui/react";
import { useRecoilState } from "recoil";

import arms from "../../../data/img/bodyFront/arms.png";
import armsY from "../../../data/img/bodyFront/armsY.png";
import { partsState } from "../../../store/partsState";
import { BooleanFalse } from "../../../data/Boolean.js";

type Props = {
  scroll: () => void;
};

export const Arms: VFC<Props> = memo(({ scroll }) => {
  const [partsBoolean, setPartsBoolean] = useRecoilState(partsState);
  const onClickArmsTrue = () => {
    scroll();
    setPartsBoolean([
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
      false,
    ]);
  };
  const onClickArmsFalse = () => {
    setPartsBoolean(BooleanFalse);
  };
  return partsBoolean[3] === false ? (
    <Image
      src={arms}
      alt="前腕のイラスト"
      position="absolute"
      h={{ base: "4.1rem", md: "7.5rem" }}
      left={{ base: "13.2%", md: "12.9%" }}
      top="40.4%"
      opacity={1}
      zIndex={1}
      _hover={{ opacity: 0.8 }}
      onClick={onClickArmsTrue}
    />
  ) : (
    <Image
      src={armsY}
      alt="前腕のイラスト"
      position="absolute"
      h={{ base: "4.1rem", md: "7.5rem" }}
      left={{ base: "13.2%", md: "12.9%" }}
      top="40.4%"
      zIndex={1}
      onClick={onClickArmsFalse}
    />
  );
});
