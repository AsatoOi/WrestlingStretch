import { memo, ReactNode, VFC } from "react";

import { Flex, Text } from "@chakra-ui/react";

type Props = {
  children: ReactNode;
};

export const DetailedText: VFC<Props> = memo(({ children }) => {
  return (
    <Flex justify="center" py={6}>
      <Text
        textAlign="center"
        maxW="80%"
        color="white"
        fontSize={{ base: "xs", md: "sm" }}
      >
        {children}
      </Text>
    </Flex>
  );
});
