import { memo, VFC } from "react";

import { Box, Image } from "@chakra-ui/react";

type Props = {
  elm: any;
};

export const TikTokFrame: VFC<Props> = memo(({ elm }) => {
  return (
    <Box pt={10} px={{ base: 2, md: 4 }}>
      <Image
        src={elm}
        alt="tiktokの動画のサムネイル"
        w={{ base: 36, md: 40 }}
        bgColor="black"
        boxShadow="lg"
      />
    </Box>
  );
});
