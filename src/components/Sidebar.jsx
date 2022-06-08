import { AtSignIcon, ExternalLinkIcon, HamburgerIcon, MoonIcon, SettingsIcon } from '@chakra-ui/icons';
import { DrawerBody, DrawerContent,Button, DrawerHeader, DrawerOverlay, useDisclosure, Drawer, Flex } from '@chakra-ui/react';
import React from 'react'


const Sidebar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const placement = "left";
  return (
    <div>   
      <Button colorScheme="blue" onClick={onOpen}>
        Open
      </Button>
      <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">Basic Drawer</DrawerHeader>
          <DrawerBody>
            <Flex flexDirection="column" gap="5">
              <p><HamburgerIcon/>Home</p>
              <p><AtSignIcon/>Trending</p>
              <p> <ExternalLinkIcon/> Explore</p>
              <p><MoonIcon/>Fevorite</p>
              <p><SettingsIcon/>  setting</p>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </div>
  );
}

export default Sidebar