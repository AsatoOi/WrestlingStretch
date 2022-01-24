/*eslint-disable react-hooks/exhaustive-deps*/
import { memo, useState, VFC } from "react";
import { Flex, Divider, Button } from "@chakra-ui/react";

import { TechButton2 } from "../../molecules/button/TechButton2";
import { TechButton3 } from "../../molecules/button/TechButton3";
import GoldCrown from "../../../data/img/crown/goldCrown.png";
import SilverCrown from "../../../data/img/crown/silverCrown.png";
import CopperCrown from "../../../data/img/crown/copperCrown.png";
import { H3_1 } from "../../atoms/text/H3-1";
import technique from "../../../data/json/technique.json";

export const PartsDefault: VFC = memo(() => {
  const newData = technique.sort((a, b) => (a.likes < b.likes ? 1 : -1));
  const [loadIndex, setLoadIndex] = useState(4);
  const [isEmpty, setIsEmpty] = useState(false);
  const displayMore = () => {
    if (loadIndex > newData.length) {
      setIsEmpty(true);
    } else {
      setLoadIndex(loadIndex + 1);
    }
  };

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
        w="60%"
        m="auto"
        alignItems="center"
      >
        <TechButton2
          title={newData[0].title}
          path={newData[0].path}
          like={newData[0].likes}
          rank="1位"
          main={newData[0].mainImage}
          rankBg={GoldCrown}
        />
        <TechButton2
          title={newData[1].title}
          path={newData[1].path}
          like={newData[1].likes}
          rank="2位"
          main={newData[1].mainImage}
          rankBg={SilverCrown}
        />
        <TechButton2
          title={newData[2].title}
          path={newData[2].path}
          like={newData[2].likes}
          rank="3位"
          main={newData[2].mainImage}
          rankBg={CopperCrown}
        />
      </Flex>
      <Flex justify="center">
        <Flex
          flexWrap="wrap"
          w={{
            base: 64,
            md: "36rem",
            lg: "60rem",
          }}
          m="auto"
        >
          {newData.slice(3, newData.length).map((tech) => (
            <TechButton3
              key={tech.title}
              techTitle={tech.title}
              path={tech.path}
              likes={tech.likes}
              main={tech.mainImage}
            />
          ))}
          <Button
            isDisabled={isEmpty ? true : false}
            onClick={displayMore}
            variant="contained"
            display="none"
          >
            more
          </Button>
          {/* <TechButton3
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
    </>
  );
});
