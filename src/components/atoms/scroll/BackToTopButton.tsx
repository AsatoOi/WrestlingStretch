import { memo, VFC } from "react";
import { Box, Text } from "@chakra-ui/react";

export const BackToTopButton: VFC = memo(() => {
  const onClickTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <Box
      position="absolute"
      right="10px"
      bottom="10vh"
      height="50px"
      textDecoration="none"
      transform="rotate(90deg)"
      fontSize="90%"
      lineHeight="1.5rem"
      color="#eee"
      pl="35px"
      borderTop="solid"
      borderTopWidth="thin"
      _before={{
        content: `""`,
        display: "block",
        position: "absolute",
        top: "-1px",
        left: "0px",
        width: "15px",
        borderTop: "solid",
        borderTopWidth: "thin",
        transform: "rotate(35deg)",
        transformOrigin: "left top",
      }}
    >
      <Text fontSize="sm" onClick={onClickTop}>
        TOP
      </Text>
    </Box>
  );
});
