/*eslint-disable react-hooks/exhaustive-deps*/
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
  Image,
} from "@chakra-ui/react";
import { TriangleUpIcon } from "@chakra-ui/icons";

import { TopBreadCrumb } from "../atoms/breadCrumb/TopBreadCrumb";
import { TechRadar } from "../molecules/radar/TechRadar";
import { DetailedText } from "../atoms/text/DetailedText";
import { Manner } from "../molecules/manner/Manner";
import { HeartButton } from "../atoms/button/HeartButton";
import technique from "../../data/json/technique.json";

export const TechniquePara: VFC = memo(() => {
  const { isOpen, onToggle } = useDisclosure();
  const { Part } = useParams();
  const navigate = useNavigate();
  const onClickSearchRoutes = useCallback(() => navigate("/SearchRoutes"), []);
  const onClickPart = useCallback(() => navigate(`/SearchRoutes${Part}`), []);
  const onClickBack = () => navigate(-1);

  const selectTechnique = technique.filter((tech) => tech.path === `/${Part}`);
  const currentTechnique = selectTechnique[0];
  console.log(currentTechnique);
  return (
    <Box>
      <TopBreadCrumb
        childBreadCrumb={
          <BreadcrumbItem>
            <BreadcrumbLink
              as={Link}
              onClick={onClickSearchRoutes}
              color="white"
            >
              #プロストをさがす
            </BreadcrumbLink>
          </BreadcrumbItem>
        }
        grandChildBreadCrumb={
          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink as={Link} onClick={onClickPart} color="white">
              {currentTechnique.title}
            </BreadcrumbLink>
          </BreadcrumbItem>
        }
      />
      <Flex justify="flex-start" px={16}>
        <Heading as="h2" size="2xl" color="white" pt="10">
          {currentTechnique.title}
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
            ml={{ base: "none", md: 12 }}
          >
            <Image
              borderRadius="3xl"
              src={`${process.env.PUBLIC_URL}/${currentTechnique.mainImage}`}
              alt={`${currentTechnique.title}のメインイメージ`}
            />
          </Box>
          <HeartButton isOpen={isOpen} onToggle={onToggle} />
        </Box>
        <Box pt={10} px={{ base: 0, md: 10 }}>
          <Text
            fontWeight="bold"
            fontSize={{ base: "lg", md: "2xl" }}
            color="white"
            pl={{ base: 10, md: 10 }}
          >
            {currentTechnique.term}
          </Text>
          <Text
            fontSize={{ base: "md", md: "xl" }}
            color="white"
            py={3}
            textAlign="center"
          >
            {currentTechnique.name}
          </Text>
          <Box px={10}>
            <TechRadar radar={currentTechnique.radar} />
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
        <Manner image={`${process.env.PUBLIC_URL}/${currentTechnique.manner1}`}>
          {`①　${currentTechnique.text1}`}
        </Manner>
        <Manner image={`${process.env.PUBLIC_URL}/${currentTechnique.manner2}`}>
          {`②　${currentTechnique.text2}`}
        </Manner>
        <Manner image={`${process.env.PUBLIC_URL}/${currentTechnique.manner3}`}>
          {`③　${currentTechnique.text3}`}
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
      <DetailedText>{currentTechnique.comment}</DetailedText>
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
