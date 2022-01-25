import { memo, VFC } from "react";
import { Flex } from "@chakra-ui/react";

import { AnatomicalModelFront } from "../../molecules/AnatomicalModel/AnatomicalModelFront";
import { AnatomicalModelBack } from "../../molecules/AnatomicalModel/AnatomicalModelBack";

export const AnatomicalModelsMd: VFC = memo(() => {
  
  return (
    <Flex
      justify="center"
      display={{ base: "none", md: "flex" }}
    >
      <AnatomicalModelFront />
      <AnatomicalModelBack />
    </Flex>
  );
});
