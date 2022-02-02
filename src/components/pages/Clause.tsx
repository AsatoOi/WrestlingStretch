/*eslint-disable react-hooks/exhaustive-deps*/
import { memo, VFC, useCallback } from "react";
import { Box, BreadcrumbItem, BreadcrumbLink, Link } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

import { TopBreadCrumb } from "../atoms/breadCrumb/TopBreadCrumb";
import { H2_2 } from "../atoms/text/H2_2";
import { DetailedText } from "../atoms/text/DetailedText";
import { ClauseElemLeft } from "../molecules/clauseElem/ClauseElemLeft";
import { ClauseElemRight } from "../molecules/clauseElem/ClauseElemRight";
import { InView } from "../../hooks/InView";
import clauseData from "../../data/json/clause.json";
import heading4 from "../../data/img/title/heading4.png";

export const Clause: VFC = memo(() => {
  const navigate = useNavigate();
  const onClickClause = useCallback(() => navigate("/Clause"), []);
  return (
    <Box>
      <TopBreadCrumb
        childBreadCrumb={
          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink as={Link} onClick={onClickClause} color="white">
              #プロスト４ヶ条
            </BreadcrumbLink>
          </BreadcrumbItem>
        }
        grandChildBreadCrumb={undefined}
      />
      <H2_2 image={heading4} imageTitle="#プロスト４ヶ条" />
      <DetailedText>
        #プロストをパートナーとやりたくても、キッカケがないというあなたへ、パートナーに#プロストを仕掛けるきっかけをお伝えします。
      </DetailedText>
      <InView>
        <ClauseElemLeft
          image={clauseData[0].image}
          title={clauseData[0].title}
          text={clauseData[0].text}
        />
      </InView>
      <InView>
        <ClauseElemRight
          image={clauseData[1].image}
          title={clauseData[1].title}
          text={clauseData[1].text}
        />
      </InView>
      <InView>
        <ClauseElemLeft
          image={clauseData[2].image}
          title={clauseData[2].title}
          text={clauseData[2].text}
        />
      </InView>
      <InView>
        <ClauseElemRight
          image={clauseData[3].image}
          title={clauseData[3].title}
          text={clauseData[3].text}
        />
      </InView>
    </Box>
  );
});
