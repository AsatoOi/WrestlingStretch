/*eslint-disable react-hooks/exhaustive-deps*/
import { memo, VFC, useCallback } from "react";
import {
  Flex,
  Box,
  BreadcrumbItem,
  BreadcrumbLink,
  Link,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

import { H2_2 } from "../atoms/text/H2_2";
import { H2_1 } from "../atoms/text/H2_1";
import { TopBreadCrumb } from "../atoms/breadCrumb/TopBreadCrumb";
import { TikTokFrame } from "../atoms/tiktok/TikTokFrame";
import { DetailedText } from "../atoms/text/DetailedText";
import heading5 from "../../data/img/title/heading5.png";
import heading6 from "../../data/img/title/heading6.png";
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
  const navigate = useNavigate();
  const onClickTikTok = useCallback(() => navigate("/TikTok"), []);
  return (
    <>
      <Box color="white">
        <TopBreadCrumb
          childBreadCrumb={
            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink as={Link} onClick={onClickTikTok} color="white">
                みんなの#プロスト
              </BreadcrumbLink>
            </BreadcrumbItem>
          }
          grandChildBreadCrumb={undefined}
        />
        <H2_2 image={heading5} imageTitle="みんなの##プロスト" />
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
        <H2_1 image={heading6} imageTitle="#プロスト公式TikTok" />
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
