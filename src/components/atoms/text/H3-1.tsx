import { memo, VFC } from "react";
import { Flex, Heading } from "@chakra-ui/react";
import { useRecoilValue } from "recoil";

import { partsState } from "../../../store/partsState";
import { InView } from "../../../hooks/InView";

export const H3_1: VFC = memo(() => {
  const partsBoolean = useRecoilValue(partsState);
  return (
    <Flex justify="center">
      <InView>
        <Heading
          as="h3"
          color="white"
          textAlign="center"
          size="lg"
          mt={{ base: 0, md: 20 }}
          mb={4}
        >
          「
          {partsBoolean[0] === true
            ? "胸"
            : partsBoolean[1] === true
            ? "肩"
            : partsBoolean[2] === true
            ? "上腕(前)"
            : partsBoolean[3] === true
            ? "前腕"
            : partsBoolean[4] === true
            ? "お腹"
            : partsBoolean[5] === true
            ? "太もも(前)"
            : partsBoolean[6] === true
            ? "背中"
            : partsBoolean[7] === true
            ? "上腕(後ろ)"
            : partsBoolean[8] === true
            ? "お尻"
            : partsBoolean[9] === true
            ? "太もも(後ろ)"
            : partsBoolean[10] === true
            ? "ふくらはぎ"
            : "全て"}
          」の#プロスト技
        </Heading>
      </InView>
    </Flex>
  );
});
