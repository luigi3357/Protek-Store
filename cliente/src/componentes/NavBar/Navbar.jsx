import * as React from 'react';
import {
    Center,
    Button,
    ButtonGroup,
    Grid,
    GridItem,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    IconButton,
    Input,
    useMediaQuery,
    Flex,
    Square,
    Text,
    Box,
    Spacer

} from '@chakra-ui/react';
import { MdOutlineAddShoppingCart } from "react-icons/md";
import {
    HamburgerIcon,
    RepeatIcon,
    SearchIcon
} from '@chakra-ui/icons'

const NavBar = () => {

    return (
        <Center mt='4' pos='sticky'>
            <Flex w='95%'>
                <Center w='3em'>
                    <Menu>
                        <MenuButton
                            as={IconButton}
                            aria-label='Options'
                            icon={<HamburgerIcon />}
                            variant='outline'
                        />
                        <MenuList>
                            <MenuItem>
                                New Tab
                            </MenuItem>
                            <MenuItem>
                                New Window
                            </MenuItem>
                            <MenuItem>
                                Open Closed Tab
                            </MenuItem>
                            <MenuItem>
                                Open File...
                            </MenuItem>
                        </MenuList>
                    </Menu>
                </Center>
                <Box flex='1.1'>
                    <Center>
                        <Input placeholder='Basic usage' />
                        <IconButton
                            colorScheme='blue'
                            aria-label='Search database'
                            icon={<SearchIcon />}
                        />
                    </Center>
                </Box>
                <Spacer/>
                <Box flex='1'>
                    <Button w='7em' mr='.5em' bgGradient='linear(to-r, rgba(1,173,178,1) 10%, rgba(7,95,171,1) 88%)'>Login</Button>
                    <Button w='7em' mr='.5em' bgGradient='linear(to-r, rgba(1,173,178,1) 10%, rgba(7,95,171,1) 88%)'>Register</Button>
                    <Button bgGradient='linear(to-r, rgba(1,173,178,1) 10%, rgba(7,95,171,1) 88%)'><MdOutlineAddShoppingCart /></Button>
                </Box>
            </Flex>
        </Center>
    )
}

export default NavBar