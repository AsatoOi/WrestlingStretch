import { memo, useCallback, VFC } from "react";
import { Box, Flex, Text, Heading, Image } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import heart from "../../../data/img/icon/heart.png";

type Props = {
  rank: string;
  main: any;
  rankBg: any;
  title: string | JSX.Element;
  like: number;
  path: string;
};

export const TechButton2: VFC<Props> = memo(
  ({ title, path, like, rank, main, rankBg }) => {
    const navigate = useNavigate();
    const onClickDetail = useCallback(
      () => navigate(`/SearchRoutes${path}`),
      [navigate]
    );

    return (
      <Box pt={10} px={3}>
        <Box
          pos="relative"
          h={{ base: 44, md: 52 }}
          w={{ base: 44, md: 52 }}
          onClick={onClickDetail}
          _before={{
            content: `"${rank}"`,
            textAlign: "center",
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
            top: { base: "-9", sm: "-5" },
            left: { base: "-3", sm: "-5" },
            mr: "10",
          }}
        >
          <Image
            src={main}
            alt={`${title}のメインビジュアル`}
            borderRadius="3xl"
          />
        </Box>
        <Heading
          as="h4"
          fontSize={{ base: "xs", md: "sm" }}
          color="white"
          pl={{ base: 1, md: 1 }}
          w={{ base: 32, md: 40 }}
        >
          {title}
        </Heading>
        <Flex justify="flex-start" pl={1}>
          <Box h="5" w="5" bgImage={heart} bgSize="contain"></Box>
          <Text fontSize={{ base: "xs", md: "sm" }} ml={3} color="white">
            {like}
          </Text>
        </Flex>
      </Box>
    );
  }
);
