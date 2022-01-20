import { memo, VFC } from "react";
import { Box, Flex, Text, Heading, Image } from "@chakra-ui/react";

import clauseImg from "../../../data/img/clauseImg-1.png";

type Props = {
  title: string;
  text: string;
  image: any;
};

export const ClauseElemLeft: VFC<Props> = memo(({ title, text, image }) => {
  return (
    <Flex justify={{ base: "center", md: "flex-start" }}>
      <Flex
        w={{ base: "24rem", md: "45rem" }}
        display={{ base: "grid", md: "flex" }}
        ml={{ base: "none", md: "10%", lg: "20%" }}
        justify={{ base: "center", md: "flex-start" }}
        pt={14}
      >
        <Image
          src={image}
          alt="#プロスト５ヶ条のイメージ"
          h={{ base: 44, md: 72 }}
          w={{ base: 44, md: 72 }}
          margin="auto"
        />
        <Box w={{ base: "100%", md: "57%" }} m="auto">
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
      </Flex>
    </Flex>
  );
});
