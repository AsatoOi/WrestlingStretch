import { ChakraProvider } from "@chakra-ui/react";

import { Router } from "./router/Router";
import { DefaultLayout } from "./components/templates/DefaultLayout";
import { theme } from "./theme/theme";
import { RecoilRoot } from "recoil";
export default function App() {
  return (
    <RecoilRoot>
      <ChakraProvider theme={theme}>
        <DefaultLayout>
          <Router />
        </DefaultLayout>
      </ChakraProvider>
    </RecoilRoot>
  );
}
