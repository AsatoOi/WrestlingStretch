import { memo, ReactNode, VFC } from "react";

import { Header } from "../organisms/layout/Header";
import { Footer } from "../organisms/layout/Footer";

type Props = {
  children: ReactNode;
};

export const DefaultLayout: VFC<Props> = memo(({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
});
