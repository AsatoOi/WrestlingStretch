/*eslint-disable react-hooks/exhaustive-deps*/
import { memo, VFC, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  BreadcrumbItem,
  BreadcrumbLink,
  Flex,
  Heading,
  Text,
  Divider,
  Image,
  Link,
} from "@chakra-ui/react";

import { TopBreadCrumb } from "../atoms/breadCrumb/TopBreadCrumb";
import { H2_2 } from "../atoms/text/H2_2";
import { InView } from "../../hooks/InView";
import ProWrestler from "../../data/img/expert/proWrestler.png";
import Chiropractor from "../../data/img/expert/chiropractor.png";
import heading7 from "../../data/img/title/heading7.png";
export const Expert: VFC = memo(() => {
  const navigate = useNavigate();
  const onClickExpert = useCallback(() => navigate("/Expert"), []);
  return (
    <Box w="100%" h="100vh">
      <TopBreadCrumb
        childBreadCrumb={
          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink as={Link} onClick={onClickExpert} color="white">
              専門家からのコメント
            </BreadcrumbLink>
          </BreadcrumbItem>
        }
        grandChildBreadCrumb={undefined}
      />
      <H2_2 image={heading7} imageTitle="専門家からのコメント" />
      <Flex justify="center" width="100%">
        <InView>
          <Flex
            w={{ base: "24rem", md: "45rem" }}
            display={{ base: "grid", md: "flex" }}
            justify="center"
            py={14}
          >
            <Image
              src={ProWrestler}
              alt="プロレスラーの写真"
              w={{ base: 44, md: 64 }}
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
                ランドロー谷口氏からのコメント
              </Heading>
              <Text
                display="block"
                color="white"
                fontSize={{ base: "xs", md: "sm" }}
                w="80%"
                m="auto"
              >
                　近年、プロレスの人気が海外・国内問わず、上昇傾向にあります。しかし、一定のファン層となっているため、今回のこのサイトは、新たなターゲットを切り開く、素晴らしいサイトであると感じました。プロレス技は危険ではありますので、しっかりとルールを守って行うようにして下さいね。技の解説ページのそれぞれに、私のイチコメもありますので、是非読んでみて下さい。
              </Text>
            </Box>
          </Flex>
        </InView>
      </Flex>
      <InView>
        <Divider
          m="auto"
          borderWidth="revert"
          borderColor="white"
          variant="dashed"
          w={{ base: "70%", md: "45rem" }}
        />
      </InView>
      <Flex justify="center">
        <InView>
          <Flex
            w={{ base: "24rem", md: "45rem" }}
            display={{ base: "grid", md: "flex" }}
            justify="center"
            pt={14}
          >
            <Image
              src={Chiropractor}
              alt="整体師の写真"
              w={{ base: 44, md: 64 }}
              margin="auto"
              display={{ base: "flex", md: "none" }}
            />
            <Box w={{ base: "100%", md: "57%" }} m="auto">
              <Heading
                as="h3"
                fontSize={{ base: "lg", md: "xl" }}
                color="white"
                textAlign="center"
                p={5}
              >
                千葉海南整骨院 多田重治さん
              </Heading>
              <Text
                display="block"
                color="white"
                fontSize={{ base: "xs", md: "sm" }}
                w="80%"
                m="auto"
              >
                　プロレスは魅せるスポーツと言われているので、しっかりと注意を払って技を行えば、安全に行うことができます。また、カップルでやることで、距離感も縮まり、オキシトシンという幸せホルモンが出ることで、よりリラックス効果が期待できます。安全に#プロストを楽しんで下さい。
              </Text>
            </Box>
            <Image
              src={Chiropractor}
              alt="整体師の写真"
              w={{ base: 44, md: 64 }}
              margin="auto"
              display={{ base: "none", md: "flex" }}
            />
          </Flex>
        </InView>
      </Flex>
    </Box>
  );
});
