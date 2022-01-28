import { Box } from "@chakra-ui/react";
import { memo, VFC } from "react";

export const Page404: VFC = memo(() => {
  return (
    <>
      <Box
        h="100vh"
        textAlign="center"
        fontSize="7rem"
        color="white"
        lineHeight="90vh"
      >
        ページが見つかりません
      </Box>
    </>
  );
});
