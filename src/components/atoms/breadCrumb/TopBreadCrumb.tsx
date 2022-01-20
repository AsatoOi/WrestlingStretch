import { memo, VFC } from "react";

import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";

type Props = {
  childBreadCrumb: any;
  grandChildBreadCrumb: any;
};

export const TopBreadCrumb: VFC<Props> = memo(
  ({ childBreadCrumb, grandChildBreadCrumb }) => {
    return (
      <Breadcrumb
        spacing="8px"
        separator={<ChevronRightIcon color="white" />}
        fontSize={{ base: "xs", md: "sm" }}
        pl={10}
      >
        <BreadcrumbItem>
          <BreadcrumbLink href="/" color="white">
            トップ
          </BreadcrumbLink>
        </BreadcrumbItem>
        {childBreadCrumb}
        {grandChildBreadCrumb}
      </Breadcrumb>
    );
  }
);
