import * as React from 'react';
import { useDispatch, useSelector } from "react-redux";
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
    SearchIcon
} from '@chakra-ui/icons'
import { FILTERRUBROS, SEARCHPRODUCT } from '../../redux/action/action';

const NavBar = ({name, setName}) => {
    const allRubros = useSelector((state) => state.rootReducer.rubro)
    const dispatch = useDispatch()

    function handleFilter(e){
    if(e){
        dispatch(FILTERRUBROS(e.target.value))
    }
}
function handleSubmit(e) {
    e.preventDefault();
    dispatch(SEARCHPRODUCT(name));
    setName('')
}
function handleInputChange(e) {
    e.preventDefault();
    setName(e.target.value)
}
    return (    
    <Center mt='4' pos='sticky'>
            <Flex w='95%'>
                <Center w='3em'>
                    <Select
                    border='1px' borderColor='blue'
                    onChange={(e) => {
                        handleFilter(e)
                      }}
                        icon={<HamburgerIcon />}
                    >
                    <option alue='GENERAL'>GENERAL</option>
                        {
                            allRubros?.map(e => {
                                return (
                                    <option key={e} value={e}>{e}</option>
                                )
                            })
                        }
                    </Select>
                </Center>
                        <form onSubmit={e => { handleSubmit(e) }}>
                <Box flex='1.1'>
                    <Center ml='3'>
                        <Input 
                        _placeholder={{ color: 'blue' }} 
                        border='1px' 
                        borderColor='blue' 
                        placeholder='Buscar...' 
                        value={name}
                        type="search"
                        key="unique"
                        onChange={e => { handleInputChange(e) }}
                        />
                        <IconButton
                            colorScheme='blue'
                            aria-label='Search database'
                            icon={<SearchIcon />}
                            type='submit'
                        />
                    </Center>
                </Box>
                        </form>
                <Spacer />
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