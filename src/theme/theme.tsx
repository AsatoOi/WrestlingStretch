import { extendTheme } from "@chakra-ui/react";

import BackgroundImage2 from "../data/img/backGround/backGroundImg_2.png";

export const theme = extendTheme({
  styles: {
    global: {
      body: {
        bgImage: BackgroundImage2,
        bgSize: "contain",
        bgRepeat: "repeat-y"
      }
    }
  }
});