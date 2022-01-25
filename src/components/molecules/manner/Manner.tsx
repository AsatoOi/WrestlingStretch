import { memo, ReactNode, VFC } from "react";

import { Box, Flex, Text, Image } from "@chakra-ui/react";

type Props = {
  children: ReactNode;
  image: string;
};

export const Manner: VFC<Props> = memo(({ children, image }) => {
  return (
    <Flex flexFlow="column" alignItems="center" pt={12} pb={6} px={3}>
      <Box
        h={{ base: 44, md: 52 }}
        w={{ base: 44, md: 52 }}
        bgColor="gray.300"
        borderRadius="xl"
      >
        <Image src={image} alt="やり方のビジュアル" />
      </Box>
      <Text
        fontSize={{ base: "xs", md: "sm" }}
        color="white"
        pt={{ base: 4, md: 8 }}
        w={{ base: 56, md: 52 }}
        pl={2}
      >
        {children}
      </Text>
    </Flex>
  );
});
