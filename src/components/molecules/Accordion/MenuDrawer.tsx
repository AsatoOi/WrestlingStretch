import { memo, VFC } from "react";
import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Link,
  Box,
} from "@chakra-ui/react";

import { TikTokButton } from "../../atoms/button/TikTokButton";

type Props = {
  onClose: () => void;
  isOpen: boolean;
  onClickSearchRoutes: () => void;
  onClickClause: () => void;
  onClickTikTok: () => void;
  onClickExpert: () => void;
};

export const MenuDrawer: VFC<Props> = memo(
  ({
    onClose,
    isOpen,
    onClickSearchRoutes,
    onClickClause,
    onClickTikTok,
    onClickExpert,
  }) => {
    const LinkAll: object[] = [
      { name: "#プロストをさがす", path: onClickSearchRoutes },
      { name: "#プロスト４ヶ条", path: onClickClause },
      { name: "みんなの#プロスト", path: onClickTikTok },
      { name: "専門家からのコメント", path: onClickExpert },
    ];

    return (
      <Drawer placement="right" size="full" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay>
          <DrawerContent bg="pink.400" opacity="0.9" position="relative" zIndex={10000}>
            <DrawerCloseButton
              mt={2}
              mr={1}
              size="md"
              _focus={{ boxShadow: "none" }}
              _hover={{ bgColor: "none" }}
              _active={{ bgColor: "none" }}
            />
            <Box
              display={{ base: "block", md: "none" }}
              mt={14}
              position="absolute"
              right={5}
            >
              <TikTokButton />
            </Box>
            <DrawerBody as="nav" pt={12}>
              {LinkAll.map((link: any, index: number) => (
                <Flex key={index} fontSize="md" my={5} ms={4} onClick={onClose}>
                  <Link onClick={link.path} color="white">
                    {link.name}
                  </Link>
                </Flex>
              ))}
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    );
  }
);
