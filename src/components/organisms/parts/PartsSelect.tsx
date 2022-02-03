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
import { InView } from "../../../hooks/InView";

export const PartsSelect: VFC = memo(() => {
  const partsBoolean = useRecoilValue(partsState);
  const pos = partsBoolean.map((boolean) => boolean).indexOf(true);
  const currentTechnique = technique.filter((tech) => {
    return tech.position.includes(pos) === true;
  });
  const recommendTechnique = currentTechnique.filter((tech) => {
    return tech.recommend === true;
  });
  const recommendTechniqueTopTwo = recommendTechnique
    .slice(0, 2)
    .map((tech) => {
      return tech;
    });
  const otherRecommendedTechnique = recommendTechnique
    .slice(3, recommendTechnique.length)
    .map((tech) => {
      return tech;
    });
  const otherTechnique = currentTechnique.filter((tech) => {
    return tech.recommend === false;
  });
  const otherAll = [...otherRecommendedTechnique, ...otherTechnique];


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
        {recommendTechniqueTopTwo.map((tech) => (
          <InView key={tech.title}>
            <TechButton4
              techTitle={tech.title}
              name={tech.name}
              likes={tech.likes}
              path={tech.path}
              term={tech.term}
              main={tech.mainImage}
            />
          </InView>
        ))}
      </Flex>
      <Flex justify="center">
        <Flex
          flexWrap="wrap"
          w={{ base: 64, md: "36rem", lg: "60rem" }}
          m="auto"
        >
          {otherAll.map((tech) => (
            <InView key={tech.title}>
              <TechButton3
                techTitle={tech.title}
                likes={tech.likes}
                path={tech.path}
                main={tech.mainImage}
              />
            </InView>
          ))}
        </Flex>
      </Flex>
      <ViewAll />
    </>
  );
});
