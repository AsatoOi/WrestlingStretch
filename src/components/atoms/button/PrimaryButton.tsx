import { memo, ReactNode, VFC } from "react";

import { Box, Button } from "@chakra-ui/react";

type Props = {
  children: ReactNode;
  onClick: () => void;
};

export const PrimaryButton: VFC<Props> = memo(({ children, onClick }) => {
  return (
    <Box textAlign="center">
      <Button
        onClick={onClick}
        fontSize={{ base: "sm", md: "lg", lg: "2xl" }}
        bg="#446CCF"
        color="white"
        opacity={0.9}
        _hover={{ opacity: 1, bgColor: "none" }}
        _active={{ shadow: "inner", bgColor: "none" }}
        _focus={{ boxShadow: "none" }}
        borderRadius="3xl"
        boxShadow="md"
        py={6}
      >
        {children}
      </Button>
    </Box>
  );
});
