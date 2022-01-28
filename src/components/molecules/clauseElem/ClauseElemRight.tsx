import { memo, VFC } from "react";

import { Box, Flex, Text, Heading, Image } from "@chakra-ui/react";

type Props = {
  title: string;
  text: string;
  image: any;
};

export const ClauseElemRight: VFC<Props> = memo(({ title, text, image }) => {
  return (
    <Flex justify={{ base: "center", md: "flex-end" }}>
      <Flex
        w={{ base: "24rem", md: "45rem", lg: "60rem" }}
        display={{ base: "grid", md: "flex" }}
        mr={{ base: "none", md: "10%", lg: "20%" }}
        justify={{ base: "center", md: "flex-start" }}
        pt={14}
      >
        <Image
          src={image}
          alt="#プロスト５ヶ条のイメージ"
          h={{ base: 44, md: 72, lg: 96 }}
          w={{ base: 44, md: 72, lg: 96 }}
          margin="auto"
          display={{ base: "flex", md: "none" }}
        />
        <Box w={{ base: "100%", md: "60%" }} m="auto">
          <Heading
            as="h3"
            fontSize={{ base: "lg", md: "xl" }}
            color="white"
            textAlign="center"
            p={5}
          >
            {title}
          </Heading>
          <Text
            display="block"
            color="white"
            fontSize={{ base: "xs", md: "sm" }}
            w="80%"
            m="auto"
          >
            　{text}
          </Text>
        </Box>
        <Image
          src={image}
          alt="#プロスト５ヶ条のイメージ"
          h={{ base: 44, md: 72, lg: 96 }}
          w={{ base: 44, md: 72, lg: 96 }}
          margin="auto"
          display={{ base: "none", md: "flex" }}
        />
      </Flex>
    </Flex>
  );
});
