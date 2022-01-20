/*eslint-disable react-hooks/exhaustive-deps*/
import { memo, useCallback, VFC } from "react";

import { Box, Flex, Text, Heading } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import heart from "../../../data/img/icon/heart.png";

type Props = {
  techTitle: string | JSX.Element;
  name: string;
  likes: number;
  path: string;
};

export const TechButton4: VFC<Props> = memo(
  ({ techTitle, name, likes, path }) => {
    const navigate = useNavigate();
    const onClickTech = useCallback(() => navigate(`/SearchRoutes${path}`), []);
    return (
      <>
        <Flex
          justify="center"
          position="relative"
          pt={20}
          onClick={onClickTech}
        >
          <Flex
            bg="white"
            position="relative"
            h={{ base: "32", md: "44" }}
            w={{ base: "19rem", md: "30rem" }}
            mb={10}
            ml="none"
            borderRadius="2xl"
            justify="space-between"
            align="center"
            boxShadow={{ base: "lg", md: "lg" }}
            _before={{
              content: `"おすすめ"`,
              color: "#5180F7",
              bgColor: "#FFD700",
              fontWeight: "black",
              fontSize: { base: "2xl", md: "3xl" },
              position: "absolute",
              px: 1,
              borderRadius: "xl",
              top: "-7",
              left: { base: "-1", sm: "-9" },
              transform: { base: "rotate(0deg)", sm: "rotate(-3deg)" },
              mr: "10",
            }}
          >
            <Box
              h={{ base: "28", md: "40" }}
              w={{ base: "28", md: "40" }}
              bg="gray.400"
              borderRadius="2xl"
              mx={{ base: 2, md: 3 }}
            ></Box>
            <Flex
              flexDirection="column"
              justify="space-around"
              h={{ base: "24", md: "36" }}
              w={{ base: "40", md: "52" }}
              borderRadius="2xl"
              mr={{ base: 0, md: 8 }}
            >
              <Heading
                as="h3"
                fontSize={{ base: "sm", md: "xl" }}
                textAlign="left"
              >
                {techTitle}
              </Heading>
              <Flex align="center">
                <Text as="p" fontSize="0.05rem" fontWeight="bold">
                  発明者
                </Text>
                <Text as="p" fontSize="0.05rem" ml={2}>
                  {name}
                </Text>
              </Flex>
              <Flex align="center" justify="left">
                <Box h="5" w="5" bgImage={heart} bgSize="contain" />
                <Text ml={2}>{likes}</Text>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </>
    );
  }
);
