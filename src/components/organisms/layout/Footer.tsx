import { Box, Flex, Text, Link, Center } from "@chakra-ui/react";
import { memo, VFC } from "react";

import { BackToTopButton } from "../../atoms/scroll/BackToTopButton";

export const Footer: VFC = memo(() => {
  return (
    <Box
      bg="#5482F6"
      color="white"
      pt={40}
      pb={3}
      bottom={0}
      textAlign="center"
    >
      <Flex justify="center">
        <BackToTopButton />
      </Flex>
      <Flex justify="center" fontSize={{ base: "xs", md: "sm" }}>
        <Text as="p">運営会社　</Text>
        <Link as="a" href="https://no-image.co.jp/" pl={1}>
          株式会社ノーイメージ
        </Link>
      </Flex>
      <Center as="small" fontSize={{ base: "xs", md: "sm" }}>
        Copyright&copy; 2022 No Image, Inc. All Rights Reserved.
      </Center>
    </Box>
  );
});
