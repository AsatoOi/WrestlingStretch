/*eslint-disable react-hooks/exhaustive-deps*/
import { memo, VFC } from "react";
import { Flex, Divider } from "@chakra-ui/react";

import { TechButton3 } from "../../molecules/button/TechButton3";
import { TechButton4 } from "../../molecules/button/TechButton4";
import technique from "../../../data/json/technique.json";
import { H3_1 } from "../../atoms/text/H3-1";
import { ViewAll } from "../../atoms/button/ViewAll";

export const PartsSelect: VFC = memo(() => {
  return (
    <>
      <H3_1 />
      <Divider
        mx="auto"
        borderWidth="revert"
        borderColor="white"
        variant="dashed"
        w="70%"
      />
      <Flex
        justify={{ base: "initial", md: "space-around" }}
        flexFlow={{ base: "column", md: "initial" }}
        w="70%"
        m="auto"
        alignItems="center"
      >
        <TechButton4
          techTitle="ハイジャック・　　　　バックブリーカー"
          name="ドン・レオ・ジョナサン"
          likes={100}
          path="/HijackBackBreaker"
        />
      </Flex>
      <Flex justify="center">
        <Flex
          flexWrap="wrap"
          w={{ base: 64, md: "36rem", lg: "60rem" }}
          m="auto"
        >
          <TechButton3
            title={technique[0].title}
            path={technique[0].path}
            like={technique[0].likes}
            main={technique[0].mainImage}
          />
          <TechButton3
            title={technique[1].title}
            path={technique[1].path}
            like={technique[1].likes}
            main={technique[1].mainImage}
          />
          <TechButton3
            title={technique[2].title}
            path={technique[2].path}
            like={technique[2].likes}
            main={technique[2].mainImage}
          />
          <TechButton3
            title={technique[1].title}
            path={technique[1].path}
            like={technique[1].likes}
            main={technique[1].mainImage}
          />
          <TechButton3
            title={technique[0].title}
            path={technique[0].path}
            like={technique[0].likes}
            main={technique[0].mainImage}
          />
          <TechButton3
            title={technique[1].title}
            path={technique[1].path}
            like={technique[1].likes}
            main={technique[1].mainImage}
          />
          <TechButton3
            title={technique[2].title}
            path={technique[2].path}
            like={technique[2].likes}
            main={technique[2].mainImage}
          />
          <TechButton3
            title={technique[1].title}
            path={technique[1].path}
            like={technique[1].likes}
            main={technique[1].mainImage}
          />
          <TechButton3
            title={technique[2].title}
            path={technique[2].path}
            like={technique[2].likes}
            main={technique[2].mainImage}
          />
          <TechButton3
            title={technique[0].title}
            path={technique[0].path}
            like={technique[0].likes}
            main={technique[0].mainImage}
          />
          <TechButton3
            title={technique[1].title}
            path={technique[1].path}
            like={technique[1].likes}
            main={technique[1].mainImage}
          />
          <TechButton3
            title={technique[2].title}
            path={technique[2].path}
            like={technique[2].likes}
            main={technique[2].mainImage}
          />
          <TechButton3
            title={technique[0].title}
            path={technique[0].path}
            like={technique[0].likes}
            main={technique[0].mainImage}
          />
        </Flex>
      </Flex>
      <ViewAll />
    </>
  );
});
