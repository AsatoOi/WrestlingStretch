import { memo, VFC } from "react";

import { Flex, Image, Heading } from "@chakra-ui/react";

type Props = {
  image: any;
  imageTitle: string;
};

export const H2_3: VFC<Props> = memo(({ image, imageTitle }) => {
  return (
    <Flex justify="center" as="h2">
      <Image
        pt="10"
        src={image}
        alt={imageTitle}
        w={{ base: "15rem", md: "25rem" }}
      />
    </Flex>
  );
});
