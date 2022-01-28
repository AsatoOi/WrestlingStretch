import { memo, ReactNode, VFC } from "react";

import { Header } from "../organisms/layout/Header";
import { Footer } from "../organisms/layout/Footer";
import { Box } from "@chakra-ui/react";

type Props = {
  children: ReactNode;
};

export const DefaultLayout: VFC<Props> = memo(({ children }) => {
  return (
    <>
      <Header />
      <Box h="7vh" />
      {children}
      <Footer />
    </>
  );
});
