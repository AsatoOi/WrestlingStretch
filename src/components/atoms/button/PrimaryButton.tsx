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
        fontSize={{ base: "sm", md: "lg" }}
        bg="#446CCF"
        color="white"
        opacity={1}
        _hover={{ opacity: 1, bgColor: "none" }}
        _active={{ shadow: "inner", bgColor: "none" }}
        _focus={{ boxShadow: "none" }}
        borderRadius="3xl"
        boxShadow="md"
      >
        {children}
      </Button>
    </Box>
  );
});
