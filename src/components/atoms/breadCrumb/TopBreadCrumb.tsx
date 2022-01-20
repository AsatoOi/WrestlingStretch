/*eslint-disable react-hooks/exhaustive-deps*/
import { memo, VFC, useCallback } from "react";

import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";

type Props = {
  childBreadCrumb: any;
  grandChildBreadCrumb: any;
};

export const TopBreadCrumb: VFC<Props> = memo(
  ({ childBreadCrumb, grandChildBreadCrumb }) => {
    const navigate = useNavigate();
    const onClickHome = useCallback(() => navigate("/"), []);
    return (
      <Breadcrumb
        spacing="8px"
        separator={<ChevronRightIcon color="white" />}
        fontSize={{ base: "xs", md: "sm" }}
        pl={10}
      >
        <BreadcrumbItem>
          <BreadcrumbLink onClick={onClickHome} color="white">
            トップ
          </BreadcrumbLink>
        </BreadcrumbItem>
        {childBreadCrumb}
        {grandChildBreadCrumb}
      </Breadcrumb>
    );
  }
);
