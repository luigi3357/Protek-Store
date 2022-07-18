import * as React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
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
    Spacer,
    Select,
} from '@chakra-ui/react';
import { MdOutlineAddShoppingCart } from "react-icons/md";
import {
    HamburgerIcon,
    RepeatIcon,
    SearchIcon,
    ArrowLeftIcon
} from '@chakra-ui/icons'
import { FILTERRUBROS, SEARCHPRODUCT } from '../../redux/action/action';

const NavBar = ({name, setName}) => {

    return (    
    <Center mt='4' pos='sticky'>
            <Flex w='95%'>                                     
                <Box flex='1'>
                    <Button onClick={e=>navigate('/login')} w='7em' mr='.5em' bgGradient='linear(to-r, rgba(1,173,178,1) 10%, rgba(7,95,171,1) 88%)'>Login</Button>
                    <Button w='7em' mr='.5em' bgGradient='linear(to-r, rgba(1,173,178,1) 10%, rgba(7,95,171,1) 88%)'>Register</Button>
                    <Button bgGradient='linear(to-r, rgba(1,173,178,1) 10%, rgba(7,95,171,1) 88%)'><MdOutlineAddShoppingCart /></Button>
                </Box>
            </Flex>
        </Center>
    )
}

export default NavBar