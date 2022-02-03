import { memo, VFC } from "react";
import { Image } from "@chakra-ui/react";
import { useRecoilState } from "recoil";

import hip from "../../../data/img/bodyBack/hip.png";
import hipY from "../../../data/img/bodyBack/hipY.png";
import { partsState } from "../../../store/partsState";
import { BooleanFalse } from "../../../data/Boolean.js";
type Props = {
  scroll: () => void;
};

export const Hip: VFC<Props> = memo(({ scroll }) => {
  const [partsBoolean, setPartsBoolean] = useRecoilState(partsState);
  const onClickHipTrue = () => {
    scroll();
    setPartsBoolean([
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
      false,
    ]);
  };
  const onClickHipFalse = () => {
    setPartsBoolean(BooleanFalse);
  };
  return partsBoolean[8] === false ? (
    <Image
      src={hip}
      alt="お尻のイラスト"
      position="absolute"
      h={{ base: "2.8rem", md: "5rem" }}
      left={{ base: "29%", md: "30.2%" }}
      top="46%"
      zIndex={2}
      opacity={1}
      _hover={{ opacity: 0.8 }}
      onClick={onClickHipTrue}
    />
  ) : (
    <Image
      src={hipY}
      alt="お尻のイラスト"
      position="absolute"
      h={{ base: "2.8rem", md: "5rem" }}
      left={{ base: "29%", md: "30.2%" }}
      top="46%"
      zIndex={2}
      onClick={onClickHipFalse}
    />
  );
});
