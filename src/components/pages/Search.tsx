/*eslint-disable react-hooks/exhaustive-deps*/
import { memo, VFC, useCallback, useEffect } from "react";
import {
  Text,
  Box,
  useDisclosure,
  BreadcrumbItem,
  BreadcrumbLink,
  Link,
} from "@chakra-ui/react";
import { useRecoilState } from "recoil";

import { TopBreadCrumb } from "../atoms/breadCrumb/TopBreadCrumb";
import { DetailedText } from "../atoms/text/DetailedText";
import { AnatomicalModelsMd } from "../organisms/AnatomicalModels/AnatomicalModelsMd";
import { AnatomicalModelsBase } from "../organisms/AnatomicalModels/AnatomicalModelsBase";
import { ToggleButton } from "../molecules/button/ToggleButton";
import { PartsDefault } from "../organisms/parts/PartsDefault";
import { partsState } from "../../store/partsState";
import { BooleanFalse } from "../../data/Boolean";
import { PartsSelect } from "../organisms/parts/PartsSelect";
import { useNavigate } from "react-router-dom";
import heading3 from "../../data/img/title/heading3.png";
import { H2_2 } from "../atoms/text/H2_2";

export const Search: VFC = memo(() => {
  const navigate = useNavigate();
  const onClickSearchRoutes = useCallback(() => navigate("/SearchRoutes"), []);
  const { isOpen, onToggle } = useDisclosure();
  const [partsBoolean, setPartsBoolean] = useRecoilState(partsState);
  useEffect(() => {
    setPartsBoolean(BooleanFalse);
  }, []);
  return (
    <Box>
      <TopBreadCrumb
        childBreadCrumb={
          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink
              as={Link}
              onClick={onClickSearchRoutes}
              color="white"
            >
              #プロストをさがす
            </BreadcrumbLink>
          </BreadcrumbItem>
        }
        grandChildBreadCrumb={undefined}
      />
      <H2_2 image={heading3} imageTitle="#プロストをさがす" />
      <DetailedText>
        人体図形から、ストレッチしたい筋肉を選択すると、その筋肉を伸ばせる#プロストが表示されます。
      </DetailedText>
      <Text
        mt={5}
        mb={12}
        textAlign="center"
        fontSize={{ base: "sm", md: "md" }}
        color="White"
        fontWeight="bold"
      >
        伸ばしたい部位を選んで下さい
      </Text>
      <AnatomicalModelsMd />
      <AnatomicalModelsBase isOpen={isOpen} />
      <ToggleButton isOpen={isOpen} onToggle={onToggle} />
      {partsBoolean === BooleanFalse ? <PartsDefault /> : <PartsSelect />}
    </Box>
  );
});
