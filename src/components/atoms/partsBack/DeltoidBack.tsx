import { memo, VFC } from "react";
import { Image } from "@chakra-ui/react";
import { useRecoilState } from "recoil";

import deltoidBack from "../../../data/img/bodyBack/Deltoid2.png";
import deltoidBackY from "../../../data/img/bodyBack/Deltoid2Y.png";
import { partsState } from "../../../store/partsState";
import { BooleanFalse } from "../../../data/Boolean.js";

type Props = {
  scroll: () => void;
};

export const DeltoidBack: VFC<Props> = memo(({ scroll }) => {
  const [partsBoolean, setPartsBoolean] = useRecoilState(partsState);
  const onClickDeltoidBackTrue = () => {
    scroll();
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
  const onClickDeltoidBackFalse = () => {
    setPartsBoolean(BooleanFalse);
  };
  return partsBoolean[1] === false ? (
    <Image
      src={deltoidBack}
      alt="肩後ろのイラスト"
      position="absolute"
      h={{ base: "2.8rem", md: "5.1rem" }}
      left={{ base: "15%", md: "15.4%" }}
      top="19.5%"
      opacity={1}
      zIndex={1}
      _hover={{ opacity: 0.8 }}
      onClick={onClickDeltoidBackTrue}
    />
  ) : (
    <Image
      src={deltoidBackY}
      alt="肩後ろのイラスト"
      position="absolute"
      h={{ base: "2.8rem", md: "5.1rem" }}
      left={{ base: "15%", md: "15.4%" }}
      top="19.5%"
      zIndex={1}
      onClick={onClickDeltoidBackFalse}
    />
  );
});
