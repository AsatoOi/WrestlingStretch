import { memo, VFC } from "react";
import { Flex, Image } from "@chakra-ui/react";

type Props = {
  image: any;
  imageTitle: string;
};

export const H2_2: VFC<Props> = memo(({ image, imageTitle }) => {
  return (
    <Flex justify="center" as="h2">
      <Image
        pt="10"
        src={image}
        alt={imageTitle}
        w={{ base: "22rem", md: "30rem" }}
      />
    </Flex>
  );
});
