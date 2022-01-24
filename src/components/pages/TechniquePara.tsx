import { memo, VFC, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";

import {
  Box,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Flex,
  Heading,
  Text,
  useDisclosure,
  Link,
} from "@chakra-ui/react";
import { TriangleUpIcon } from "@chakra-ui/icons";

import { TopBreadCrumb } from "../atoms/breadCrumb/TopBreadCrumb";
import { TechRadar } from "../molecules/radar/TechRadar";
import { DetailedText } from "../atoms/text/DetailedText";
import { Manner } from "../molecules/manner/Manner";
import { HeartButton } from "../atoms/button/HeartButton";

export const TechniquePara: VFC = memo(() => {
  const { isOpen, onToggle } = useDisclosure();
  const { Part } = useParams();
  const navigate = useNavigate();
  const onClickSearchRoutes = useCallback(() => navigate("/SearchRoutes"), []);
  const onClickPart = useCallback(() => navigate(`/SearchRoutes/${Part}`), []);
  const onClickBack = () => navigate(-1);

  return (
    <Box>
      <TopBreadCrumb
        childBreadCrumb={
          <BreadcrumbItem>
            <BreadcrumbLink as={Link} onClick={onClickSearchRoutes} color="white">
              #プロストをさがす
            </BreadcrumbLink>
          </BreadcrumbItem>
        }
        grandChildBreadCrumb={
          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink as={Link} onClick={onClickPart} color="white">
              {Part}
            </BreadcrumbLink>
          </BreadcrumbItem>
        }
      />
      <Flex justify="flex-start" px={16}>
        <Heading as="h2" size="2xl" color="white" pt="10">
          ハイジャック ・バックブリーカー
        </Heading>
      </Flex>
      <Flex
        justify={{ base: "initial", md: "center" }}
        flexFlow={{ base: "column", md: "initial" }}
        alignItems="center"
        pt={{ base: 10, md: 16 }}
        pb={{ base: 8, md: 10 }}
      >
        <Box>
          <Box
            h={{ base: "18rem", md: "22rem", lg: "28rem" }}
            w={{ base: "18rem", md: "22rem", lg: "28rem" }}
            bgColor="gray.300"
            ml={{ base: "none", md: 12 }}
            borderRadius="3xl"
          ></Box>
          <HeartButton isOpen={isOpen} onToggle={onToggle} />
        </Box>
        <Box pt={10} px={{ base: 0, md: 10 }}>
          <Text
            fontWeight="bold"
            fontSize={{ base: "lg", md: "2xl" }}
            color="white"
            pl={{ base: 10, md: 10 }}
          >
            発明者
          </Text>
          <Text
            fontSize={{ base: "md", md: "xl" }}
            color="white"
            py={3}
            textAlign="center"
          >
            ドン・レオ・ジョナサン
          </Text>
          <Box px={10}>
            <TechRadar />
          </Box>
        </Box>
      </Flex>
      <Heading
        as="h3"
        color="white"
        textAlign="center"
        size="lg"
        mt={12}
        position="relative"
        left="-1"
      >
        やり方
      </Heading>
      <Flex
        justify={{ base: "center", md: "space-around" }}
        flexFlow={{ base: "column", md: "initial" }}
        w="70%"
        m="auto"
      >
        <Manner>①　相手と背中同士で向き合います。</Manner>
        <Manner>
          ②　互いに腕を広げて、下になる方が上になる方の手を握ります。
        </Manner>
        <Manner>
          ③　その状態で、下になる人が上になる人を背中で持ち上げて、上の人の胸から腕の筋肉を伸ばしてあげます。下になる人の方が体重が重く、周囲に十分なスペースがある場合、下の人がクルクル周ることで、上の人への刺激を高めることができます。
        </Manner>
      </Flex>
      <Heading
        as="h4"
        color="white"
        textAlign="center"
        size="sm"
        mt={20}
        position="relative"
        left="-1"
      >
        プロレスラーからのイチコメ
      </Heading>
      <DetailedText>
        男女のカップルであれば、下に男子、上に女子がいいでしょう。
      </DetailedText>
      <Flex justify="center" pt={10}>
        <Button
          onClick={onClickBack}
          bg="none"
          color="white"
          _focus={{ boxShadow: "none" }}
          _hover={{ bgColor: "none" }}
          _active={{ bgColor: "none" }}
        >
          back
          <span>
            <TriangleUpIcon sx={{ transform: "rotate(90deg)" }} pb={1} />
          </span>
        </Button>
      </Flex>
    </Box>
  );
});