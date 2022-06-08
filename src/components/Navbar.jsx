import { ChevronDownIcon } from '@chakra-ui/icons';
import { Box, Button, ButtonGroup, Flex,Menu, MenuButton, MenuItem, MenuList, Spacer } from '@chakra-ui/react';
import React from 'react'

const Navbar = () => {
  return (
    <Flex border="1px" justifyContent="crnter">
      <Box w="50%" h="10">
        <Flex alignItems="center" gap="10">
          <Box fontWeight="bold">
            Logo
          </Box>
          <Box>
            <Flex gap="4">
              <Menu>
                <MenuButton rightIcon={<ChevronDownIcon />}>
                  Inspiration
                </MenuButton>
                <MenuList>
                  <MenuItem>Download</MenuItem>
                  <MenuItem>Create a Copy</MenuItem>
                </MenuList>
              </Menu>
              <Menu>
                <MenuButton rightIcon={<ChevronDownIcon />}>
                  Find work
                </MenuButton>
                <MenuList>
                  <MenuItem>Download</MenuItem>
                  <MenuItem>Create a Copy</MenuItem>
                </MenuList>
              </Menu>
              <Menu>
                <MenuButton rightIcon={<ChevronDownIcon />}>
                  Learn Design
                </MenuButton>
                <MenuList>
                  <MenuItem>Download</MenuItem>
                  <MenuItem>Create a Copy</MenuItem>
                </MenuList>
              </Menu>
              <Menu>
                <MenuButton rightIcon={<ChevronDownIcon />}>
                  Hire Designers
                </MenuButton>
                <MenuList>
                  <MenuItem>Download</MenuItem>
                  <MenuItem>Create a Copy</MenuItem>
                </MenuList>
              </Menu>
            </Flex>
          </Box>
        </Flex>
      </Box>
      <Spacer />
      <Box w="50%" h="10">
        <Box>
          <ButtonGroup gap="2" float="right">
            <Button color="black" backgroundColor="white">Sign In</Button>
            <Button colorScheme="pink">Sign Up</Button>
          </ButtonGroup>
        </Box>
      </Box>
    </Flex>
  );
}

export default Navbar