import { memo, VFC } from "react";
import { Flex, Text, Image } from "@chakra-ui/react";

import arrow from "../../../data/img/icon/arrow.png";

type Props = {
  onToggle: () => void;
  isOpen: boolean;
};

export const ToggleButton: VFC<Props> = memo(({ onToggle, isOpen }) => {
  return (
    <Flex
      justify="flex-end"
      mr={10}
      my={4}
      display={{ base: "flex", md: "none" }}
      position="relative"
      bottom={16}
    >
      <Flex flexFlow="column" align="center" justify="center">
        <Image
          src={arrow}
          alt="前後変換ボタン"
          h={16}
          onClick={onToggle}
        ></Image>
        <Text
          display="block"
          color="white"
          fontWeight="bold"
          fontSize="xs"
          textAlign="center"
        >
          {isOpen === true ? "前を見る" : "後を見る"}
        </Text>
      </Flex>
    </Flex>
  );
});
