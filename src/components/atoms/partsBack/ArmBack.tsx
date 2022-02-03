import { memo, VFC } from "react";
import { Image } from "@chakra-ui/react";
import { useRecoilState } from "recoil";

import armBack from "../../../data/img/bodyBack/Arm2.png";
import armBackY from "../../../data/img/bodyBack/Arm2Y.png";
import { partsState } from "../../../store/partsState";
import { BooleanFalse } from "../../../data/Boolean.js";

type Props = {
  scroll: () => void;
};

export const ArmBack: VFC<Props> = memo(({ scroll }) => {
  const [partsBoolean, setPartsBoolean] = useRecoilState(partsState);
  const onClickArmBackTrue = () => {
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
  const onClickArmBackFalse = () => {
    setPartsBoolean(BooleanFalse);
  };
  return partsBoolean[3] === false ? (
    <Image
      src={armBack}
      alt="前腕後ろのイラスト"
      position="absolute"
      h={{ base: "4.1rem", md: "7.4rem" }}
      left={{ base: "13.2%", md: "12.9%" }}
      top="41%"
      opacity={1}
      zIndex={1}
      _hover={{ opacity: 0.8 }}
      onClick={onClickArmBackTrue}
    />
  ) : (
    <Image
      src={armBackY}
      alt="前腕後ろのイラスト"
      position="absolute"
      h={{ base: "4.1rem", md: "7.4rem" }}
      left={{ base: "13.2%", md: "12.9%" }}
      top="41%"
      zIndex={1}
      onClick={onClickArmBackFalse}
    />
  );
});
