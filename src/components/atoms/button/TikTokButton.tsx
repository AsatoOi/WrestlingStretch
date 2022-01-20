import { memo, VFC } from "react";

import { Link, Image } from "@chakra-ui/react";
import TiktokIcon from "../../../data/img/icon/tiktokIcon.png";

export const TikTokButton: VFC = memo(() => {
  return (
    <Link href="https://www.tiktok.com/">
      <Image
        boxSize={7}
        fit="contain"
        objectFit="cover"
        src={TiktokIcon}
        alt="tiktok logo"
        _hover={{ cursor: "pointer" }}
      />
    </Link>
  );
});
