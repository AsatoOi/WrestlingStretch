import { memo, VFC } from "react";
import {
  Box,
  Flex,
  Text,
  useDisclosure,
  IconButton,
  ScaleFade
} from "@chakra-ui/react";
import { CloseIcon, WarningTwoIcon } from "@chakra-ui/icons";

export const PrecautionaryStatement: VFC = memo(() => {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <>
      {isOpen === false ? (
        <ScaleFade in={!isOpen}>
          <Box w="95%">
            <Flex
              alignItems="center"
              bg="pink.400"
              py={1}
              px={3}
              justify="space-between"
              maxW="1100px"
              opacity="0.9"
            >
              <Flex align="center">
                <IconButton
                  aria-label="注意"
                  size="lg"
                  variant="unstyled"
                  icon={<WarningTwoIcon />}
                  color="pink.100"
                />
                <Text
                  as="p"
                  fontSize={{ base: "0.5rem", md: "sm" }}
                  pr={5}
                  color="White"
                  fontWeight="bold"
                  pt={{ base: "none", md: 1 }}
                >
                  #プロストで紹介されている技は、間違って行うと、大怪我に繋がる技があります。しっかりとやり方を確認し、正しいやり方で行うようにしましょう。
                </Text>
              </Flex>

              <IconButton
                aria-label="閉じるボタン"
                color="pink.100"
                size="xs"
                icon={<CloseIcon />}
                variant="unstyled"
                _focus={{ boxShadow: "none" }}
                onClick={onToggle}
              />
            </Flex>
          </Box>
        </ScaleFade>
      ) : (
        <Box w="95%" minH="7vh" opacity={0} />
      )}
    </>
  );
});
