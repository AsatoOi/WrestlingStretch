import { memo, VFC } from "react";

import { Link, Image } from "@chakra-ui/react";
import TiktokIcon from "../../../data/img/icon/tiktokIcon.png";

export const TikTokButton: VFC = memo(() => {
  return (
    <Link href="https://vt.tiktok.com/ZSeb6Wo69">
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
