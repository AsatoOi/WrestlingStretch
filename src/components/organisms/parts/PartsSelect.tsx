/*eslint-disable react-hooks/exhaustive-deps*/
import { memo, VFC } from "react";
import { Flex, Divider } from "@chakra-ui/react";
import { useRecoilValue } from "recoil";

import { TechButton3 } from "../../molecules/button/TechButton3";
import { TechButton4 } from "../../molecules/button/TechButton4";
import technique from "../../../data/json/technique.json";
import { H3_1 } from "../../atoms/text/H3-1";
import { ViewAll } from "../../atoms/button/ViewAll";
import { partsState } from "../../../store/partsState";

export const PartsSelect: VFC = memo(() => {
  const partsBoolean = useRecoilValue(partsState);
  const pos = partsBoolean.map((boolean) => boolean).indexOf(true);
  const currentTechnique = technique.filter((tech) => {
    return tech.position.includes(pos) === true;
  });
  const recommendTechnique = currentTechnique.filter((tech) => {
    return tech.recommend === true;
  });
  const otherTechnique = currentTechnique.filter((tech) => {
    return tech.recommend === false;
  });
  return (
    <>
      <H3_1 />
      <Divider
        mx="auto"
        borderWidth="revert"
        borderColor="white"
        variant="dashed"
        w="70%"
        mb={10}
      />
      <Flex
        justify={{ base: "initial" }}
        flexFlow={{ base: "column" }}
        w="70%"
        m="auto"
        alignItems="center"
      >
        {recommendTechnique.map((tech) => (
          <TechButton4
            key={tech.title}
            techTitle={tech.title}
            name={tech.name}
            likes={tech.likes}
            path={tech.path}
            term={tech.term}
            main={tech.mainImage}
          />
        ))}
      </Flex>
      <Flex justify="center">
        <Flex
          flexWrap="wrap"
          w={{ base: 64, md: "36rem", lg: "60rem" }}
          m="auto"
        >
          {otherTechnique.map((tech) => (
            <TechButton3
              key={tech.title}
              techTitle={tech.title}
              likes={tech.likes}
              path={tech.path}
              main={tech.mainImage}
            />
          ))}
          {/* <TechButton3
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
          /> */}
        </Flex>
      </Flex>
      <ViewAll />
    </>
  );
});
