import { memo, ReactNode, VFC } from "react";

import { Flex, Heading } from "@chakra-ui/react";

type Props = {
  children: ReactNode;
};

export const H2_2: VFC<Props> = memo(({ children }) => {
  return (
    <Flex justify="center">
      <Heading as="h2" size="lg" color="white" pt="10">
        {children}
      </Heading>
    </Flex>
  );
});
