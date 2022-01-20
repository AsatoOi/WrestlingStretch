import { memo, useCallback, VFC } from "react";
import { Box, Flex, Text, Heading, Image } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

import heart from "../../../data/img/icon/heart.png";

type Props = {
  main: any;
  title: string | JSX.Element;
  like: number;
  path: string;
};

export const TechButton3: VFC<Props> = memo(({ title, path, like, main }) => {
  const navigate = useNavigate();
  const onClickDetail = useCallback(
    () => navigate(`/SearchRoutes${path}`),
    [navigate]
  );
  return (
    <Box pt={10} px={{ base: 2, md: 4 }}>
      <Box
        pos="relative"
        h={{ base: 28, md: 40 }}
        w={{ base: 28, md: 40 }}
        onClick={onClickDetail}
      >
        <Image src={main} alt="技のビジュアル" />
      </Box>
      <Heading
        as="h4"
        fontSize={{ base: "xx-small", md: "x-small" }}
        py={1}
        color="white"
        w={{ base: 28, md: 28 }}
      >
        {title}
      </Heading>
      <Flex justify="flex-start" pl={1}>
        <Box h="5" w="5" bgImage={heart} bgSize="contain"></Box>
        <Text fontSize={{ base: "x-small", md: "xs" }} ml={3} color="white">
          {like}
        </Text>
      </Flex>
    </Box>
  );
});
