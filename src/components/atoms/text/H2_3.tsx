import { memo, VFC } from "react";

import { Flex, Image, Heading } from "@chakra-ui/react";

type Props = {
  image: any;
  imageTitle: string;
};

export const H2_3: VFC<Props> = memo(({ image, imageTitle }) => {
  return (
    <Flex justify="center">
      <Heading as="h2" size="lg" color="white" pt="10" w="30rem">
        <Image src={image} alt={imageTitle} />
      </Heading>
    </Flex>
  );
});
