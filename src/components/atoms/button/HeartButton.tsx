import { memo, VFC } from "react";
import { Box } from "@chakra-ui/react";
import heart from "../../../data/img/icon/heart.png";
import heart2 from "../../../data/img/icon/heart2.png";

type Props = {
  isOpen: boolean;
  onToggle: () => void;
};

export const HeartButton: VFC<Props> = memo(({ isOpen, onToggle }) => {
  return isOpen === true ? (
    <Box
      h={{ base: 7, md: 7, lg: 8 }}
      w={{ base: 7, md: 7, lg: 8 }}
      bgImage={heart}
      bgSize="contain"
      position="relative"
      left={{ base: "15.3em", md: "22rem", lg: "27.5rem" }}
      bottom={{ base: "2.5rem", md: "3rem", lg: "3.5rem" }}
      onClick={onToggle}
    />
  ) : (
    <Box
      h={{ base: 7, md: 7, lg: 8 }}
      w={{ base: 7, md: 7, lg: 8 }}
      bgImage={heart2}
      bgSize="contain"
      position="relative"
      left={{ base: "15.3em", md: "22rem", lg: "27.5rem" }}
      bottom={{ base: "2.5rem", md: "3rem", lg: "3.5rem" }}
      onClick={onToggle}
    />
  );
});
