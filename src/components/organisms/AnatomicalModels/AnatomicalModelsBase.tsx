import { memo, VFC } from "react";

import { Flex } from "@chakra-ui/react";

import { AnatomicalModelFront } from "../../molecules/AnatomicalModel/AnatomicalModelFront";
import { AnatomicalModelBack } from "../../molecules/AnatomicalModel/AnatomicalModelBack";

type Props = {
  isOpen: boolean;
};

export const AnatomicalModelsBase: VFC<Props> = memo(({ isOpen }) => {
  return (
    <Flex
      justify="center"
      display={{ base: "flex", md: "none" }}
    >
      {isOpen === true ? <AnatomicalModelBack /> : <AnatomicalModelFront />}
    </Flex>
  );
});
