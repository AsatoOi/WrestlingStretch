import { memo, VFC } from "react";

import { Image, Flex } from "@chakra-ui/react";

type Props = {
  image: string;
  imageTitle: string;
};

export const H2_1: VFC<Props> = memo(({ image, imageTitle }) => {
  return (
    <Flex justify="center" as="h2">
      <Image
        pt={{ base: 32, md: 40 }}
        pb={{ base: 10, md: 16 }}
        src={image}
        alt={imageTitle}
        w={{ base: "22rem", md: "30rem" }}
      />
    </Flex>
  );
});
