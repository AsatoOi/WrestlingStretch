/*eslint-disable react-hooks/exhaustive-deps*/
import { memo, useCallback, VFC } from "react";

import { Flex, Box, useDisclosure, Link, Image } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

import { MenuIconButton } from "../../atoms/button/MenuIconButton";
import { MenuDrawer } from "../../molecules/Accordion/MenuDrawer";
import { TikTokButton } from "../../atoms/button/TikTokButton";
import MainTitle from "../../../data/img/title/mainTitle.png";

export const Header: VFC = memo(() => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();

  const onClickHome = useCallback(() => navigate("/"), []);
  const onClickSearchRoutes = useCallback(() => navigate("/SearchRoutes"), []);
  const onClickClause = useCallback(() => navigate("/Clause"), []);
  const onClickTikTok = useCallback(() => navigate("/TikTok"), []);
  const onClickSNS = useCallback(() => navigate("/SNS"), []);
  const onClickExpert = useCallback(() => navigate("/Expert"), []);
  return (
    <>
      <Flex
        as="nav"
        bg="#5482F6"
        color="white"
        align="center"
        justify="space-between"
        h="7vh"
        padding={{ base: 2, md: 5 }}
      >
        <Box w="100px" as="h1">
          <Image
            fit="contain"
            objectFit="cover"
            src={MainTitle}
            alt="Main logo"
            _hover={{ cursor: "pointer" }}
            onClick={onClickHome}
          />
        </Box>
        <Flex
          align="center"
          fontSize="sm"
          display={{ base: "none", md: "flex" }}
        >
          {/* ここはmapで処理する */}
          <Box pr={20}>
            <Link onClick={onClickSearchRoutes} fontWeight="bold">
              #プロストをさがす
            </Link>
          </Box>
          <Box pr={20}>
            <Link onClick={onClickClause} fontWeight="bold">
              #プロスト５ヶ条
            </Link>
          </Box>
          <Box pr={20}>
            <Link onClick={onClickTikTok} fontWeight="bold">
              みんなの#プロスト
            </Link>
          </Box>
          <Box pr={20}>
            <Link onClick={onClickExpert} fontWeight="bold">
              専門家からのコメント
            </Link>
          </Box>
          <Box pr={6}>
            <TikTokButton />
          </Box>
        </Flex>
        <MenuIconButton onOpen={onOpen} />
      </Flex>
      <MenuDrawer
        isOpen={isOpen}
        onClose={onClose}
        onClickSearchRoutes={onClickSearchRoutes}
        onClickClause={onClickClause}
        onClickTikTok={onClickTikTok}
        onClickSNS={onClickSNS}
        onClickExpert={onClickExpert}
      />
    </>
  );
});
