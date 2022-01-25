/*eslint-disable react-hooks/exhaustive-deps*/
import { memo, useCallback, VFC } from "react";

import { Box, Flex, Text, Heading, Image } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import heart from "../../../data/img/icon/heart.png";

type Props = {
  rank: string;
  rankBg: any;
  techTitle: string;
  term: string;
  name: string;
  likes: number;
  path: string;
  mainImage: string;
};

export const TechButton1: VFC<Props> = memo(
  ({ rank, rankBg, techTitle, term, name, likes, path, mainImage }) => {
    const navigate = useNavigate();
    const onClickRank = useCallback(() => navigate(`/SearchRoutes${path}`), []);
    return (
      <>
        <Flex justify="center" position="relative">
          <Flex
            bg="white"
            position="relative"
            h={{ base: "32", md: "44" }}
            w={{ base: "19rem", md: "30rem" }}
            mb={10}
            ml={{ base: "none", md: 10 }}
            borderRadius="2xl"
            justify="space-between"
            align="center"
            boxShadow={{ base: "lg", md: "lg" }}
            _before={{
              content: `"${rank}"`,
              color: "cyan.900",
              fontWeight: "bold",
              fontSize: { base: "md", md: "lg" },
              position: "absolute",
              width: { base: "14", md: "20" },
              height: { base: "10", md: "14" },
              lineHeight: { base: "10", md: "10" },
              pt: { base: "1", md: "3" },
              backgroundImage: rankBg,
              backgroundSize: "contain",
              top: { base: "-9", sm: "-5", md: "14" },
              left: { base: "-3", sm: "-5", md: "-32" },
              mr: "10",
            }}
          >
            <Box
              h={{ base: "28", md: "40" }}
              w={{ base: "28", md: "40" }}
              borderRadius="2xl"
              mx={{ base: 2, md: 3 }}
            >
              <Image src={mainImage} alt="main image" />
            </Box>
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
                  {term}
                </Text>
                <Text as="p" fontSize="0.05rem" ml={2}>
                  {name}
                </Text>
              </Flex>
              <Flex align="center" justify="left">
                <Box h="5" w="5" bgImage={heart} bgSize="contain" />
                <Text ml={2}>{likes}</Text>
              </Flex>
              <Flex
                as="button"
                bg="#5482F6"
                color="white"
                fontSize={{ base: "xs", md: "sm" }}
                py={{ base: 1.5, md: 2 }}
                mt={{ base: 1.5, md: 2 }}
                mr={{ base: 3, md: 2 }}
                boxShadow="md"
                fontWeight="bold"
                borderRadius="3xl"
                justify="center"
                display={{ base: "flex", md: "flex" }}
                _hover={{ bgColor: "none", cursor: "pointer" }}
                _active={{ shadow: "inner", bgColor: "none" }}
                _focus={{ boxShadow: "none" }}
                onClick={onClickRank}
              >
                詳しく見る
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </>
    );
  }
);
