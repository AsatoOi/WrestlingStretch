import { memo, VFC } from "react";
import { useRecoilState } from "recoil";
import { Flex, Button } from "@chakra-ui/react";

import { partsState } from "../../../store/partsState";
import { BooleanFalse } from "../../../data/Boolean";

export const ViewAll: VFC = memo(() => {
  const [partsBoolean, setPartsBoolean] = useRecoilState(partsState);
  const onClickViewAll = () => {
    setPartsBoolean(BooleanFalse);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <Flex textAlign="center" justify="center" mt={16}>
      <Button
        fontSize={{ base: "sm", md: "lg" }}
        bg="#446CCF"
        color="white"
        opacity={1}
        _hover={{ opacity: 1, bgColor: "none" }}
        _active={{ shadow: "inner", bgColor: "none" }}
        _focus={{ boxShadow: "none" }}
        borderRadius="3xl"
        boxShadow="md"
        onClick={onClickViewAll}
      >
        全ての#プロスト技を見る
      </Button>
    </Flex>
  );
});
