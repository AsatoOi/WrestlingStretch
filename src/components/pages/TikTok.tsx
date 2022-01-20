import { memo, VFC } from "react";
import { Flex, Box, Heading } from "@chakra-ui/react";

import { H2_2 } from "../atoms/text/H2_2";
import { TikTokFrame } from "../atoms/tiktok/TikTokFrame";
import { DetailedText } from "../atoms/text/DetailedText";
import no1 from "../../data/img/tikTok/no.1.png";
import no2 from "../../data/img/tikTok/no.2.png";
import no3 from "../../data/img/tikTok/no.3.png";
import no4 from "../../data/img/tikTok/no.4.png";
import no5 from "../../data/img/tikTok/no.5.png";
import no6 from "../../data/img/tikTok/no.6.png";
import no7 from "../../data/img/tikTok/no.7.png";
import no8 from "../../data/img/tikTok/no.8.png";
import no9 from "../../data/img/tikTok/no.9.png";
import no10 from "../../data/img/tikTok/no.10.png";

export const TikTok: VFC = memo(() => {
  return (
    <>
      <Box color="white">
        <H2_2>みんなの#プロスト</H2_2>
        <DetailedText>
          TikTokで#プロストで投稿されたみんなの動画を見ることができます。
          あなたも投稿をして、#プロストコミュニティーを広げましょう。
        </DetailedText>
        <Flex justify="center">
          <Flex flexWrap="wrap" w={{ base: "20rem", md: "48rem" }} m="auto">
            <TikTokFrame elm={no1} />
            <TikTokFrame elm={no2} />
            <TikTokFrame elm={no3} />
            <TikTokFrame elm={no4} />
            <TikTokFrame elm={no5} />
            <TikTokFrame elm={no6} />
            <TikTokFrame elm={no7} />
            <TikTokFrame elm={no8} />
          </Flex>
        </Flex>
        <Flex justify="center">
          <Heading
            as="h2"
            size="lg"
            color="white"
            pt={{ base: 32, md: 40 }}
            pb={{ base: 10, md: 10 }}
          >
            #プロスト公式TikTok
          </Heading>
        </Flex>
        <Flex justify="center">
          <Flex flexWrap="wrap" w={{ base: "20rem", md: "48rem" }} m="auto">
            <TikTokFrame elm={no9} />
            <TikTokFrame elm={no10} />
            <TikTokFrame elm={no1} />
            <TikTokFrame elm={no2} />
          </Flex>
        </Flex>
      </Box>
    </>
  );
});
