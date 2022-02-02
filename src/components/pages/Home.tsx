import { memo, VFC, useCallback } from "react";
import { Box, Flex, Text, Stack, Image } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

import { PrimaryButton } from "../atoms/button/PrimaryButton";
import { ScrollDownButton } from "../atoms/scroll/ScrollDownButton";
import { TikTokButton } from "../atoms/button/TikTokButton";
import { PrecautionaryStatement } from "../molecules/Accordion/PrecautionaryStatement";
import { H2_1 } from "../atoms/text/H2_1";
import { TechButton1 } from "../molecules/button/TechButton1";
import { InView } from "../../hooks/InView";
import BackgroundImage from "../../data/img/backGround/backGroundImg.png";
import MainTitle2 from "../../data/img/title/mainTitle2.png";
import GoldCrown from "../../data/img/crown/goldCrown.png";
import SilverCrown from "../../data/img/crown/silverCrown.png";
import CopperCrown from "../../data/img/crown/copperCrown.png";
import technique from "../../data/json/technique.json";
import heading1 from "../../data/img/title/heading1.png";
import heading2 from "../../data/img/title/heading2.png";

export const Home: VFC = memo(() => {
  const newData = technique.sort((a, b) => (a.likes < b.likes ? 1 : -1));
  const navigate = useNavigate();
  const onClickSearchRoutes = useCallback(
    () => navigate("/SearchRoutes"),
    [navigate]
  );
  let techData = [
    {
      rank: "1位",
      rankBg: { GoldCrown },
      title: `${newData[0].title}`,
      term: `${newData[0].term}`,
      name: `${newData[0].name}`,
      likes: newData[0].likes,
      path: `${newData[0].path}`,
      mainImage: newData[0].mainImage,
    },
    {
      rank: "2位",
      rankBg: { SilverCrown },
      title: `${newData[1].title}`,
      term: `${newData[1].term}`,
      name: `${newData[1].name}`,
      likes: newData[1].likes,
      path: `${newData[1].path}`,
      mainImage: newData[1].mainImage,
    },
    {
      rank: "3位",
      rankBg: { CopperCrown },
      title: `${newData[2].title}`,
      term: `${newData[2].term}`,
      name: `${newData[2].name}`,
      likes: newData[2].likes,
      path: `${newData[2].path}`,
      mainImage: newData[2].mainImage,
    },
  ];

  return (
    <>
      <Box
        minH="93vh"
        position="relative"
        bgImage={BackgroundImage}
        bgSize="cover"
        bgPosition="bottom"
      >
        <Box
          display={{ base: "block", md: "none" }}
          mt={4}
          position="absolute"
          right={4}
        >
          <TikTokButton />
        </Box>
        <Flex flexFlow="column" h="93vh" justify="center">
          <Box flex="1" textAlign="center">
            <InView>
              <Box
                w={{
                  base: "22rem",
                  sm: "25rem",
                  md: "35rem",
                }}
                mt="20vh"
                mb={8}
                mx="auto"
                borderRadius="lg"
                display="flex"
                justify="center"
                alignItems="center"
              >
                <Image
                  fit="contain"
                  objectFit="cover"
                  src={MainTitle2}
                  alt="Main logo"
                />
              </Box>
            </InView>
            <InView>
              <PrimaryButton onClick={onClickSearchRoutes}>
                さっそく#プロストを見る
              </PrimaryButton>
            </InView>
          </Box>
          <ScrollDownButton />
          <PrecautionaryStatement />
        </Flex>
      </Box>
      <Box textAlign="center">
        <InView>
          <H2_1 image={heading1} imageTitle="#プロストって？" />
        </InView>
        <InView>
          <Box position="relative">
            <Text
              fontSize={{ base: "sm", md: "md", lg: "lg" }}
              color="#eee"
              fontWeight="bold"
              lineHeight={{ base: "2.5rem", md: "3.5rem" }}
              zIndex={1}
            >
              #プロストとは、
              <br /> 「プロレス技でストレッチしよう！」の略称です。
              <br />
              あなたのパートナーと、#プロストを通して
              <br />
              スキンシップを取ることで、
              <br />
              パートナーとのおうち時間の充実に繋がります。
              <br />
              さぁ、カップルで#プロストを始めましょう。
            </Text>
          </Box>
        </InView>
        <InView>
          <H2_1 image={heading2} imageTitle="#プロストランキング" />
        </InView>
        <Stack pb={10}>
          <InView>
            <TechButton1
              rank={techData[0].rank}
              rankBg={techData[0].rankBg.GoldCrown}
              techTitle={techData[0].title}
              term={techData[0].term}
              name={techData[0].name}
              likes={techData[0].likes}
              path={techData[0].path}
              mainImage={techData[0].mainImage}
            />
          </InView>
          <InView>
            <TechButton1
              rank={techData[1].rank}
              rankBg={techData[1].rankBg.SilverCrown}
              techTitle={techData[1].title}
              term={techData[1].term}
              name={techData[1].name}
              likes={techData[1].likes}
              path={techData[1].path}
              mainImage={techData[1].mainImage}
            />
          </InView>
          <InView>
            <TechButton1
              rank={techData[2].rank}
              rankBg={techData[2].rankBg.CopperCrown}
              techTitle={techData[2].title}
              term={techData[2].term}
              name={techData[2].name}
              likes={techData[2].likes}
              path={techData[2].path}
              mainImage={techData[2].mainImage}
            />
          </InView>
        </Stack>
        <InView>
          <PrimaryButton onClick={onClickSearchRoutes}>
            もっと#プロストを見る
          </PrimaryButton>
        </InView>
      </Box>
    </>
  );
});
