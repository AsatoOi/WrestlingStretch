import { memo, ReactNode, VFC } from "react";

import { Heading, Flex } from "@chakra-ui/react";

type Props = {
  children: ReactNode;
};

export const H2_1: VFC<Props> = memo(({ children }) => {
  return (
    <Flex justify="center">
      <Heading
        as="h2"
        size="lg"
        color="white"
        pt={{ base: 32, md: 40 }}
        pb={{ base: 10, md: 20 }}
      >
        {children}
      </Heading>
    </Flex>
  );
});
