import * as React from 'react';
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
    Center,
    Button,
    IconButton,
    Input,
    Flex,
    Box,
    Spacer,
    Select,
} from '@chakra-ui/react';
import { MdOutlineAddShoppingCart } from "react-icons/md";
import {
    HamburgerIcon,
    SearchIcon
} from '@chakra-ui/icons'
import { FILTERRUBROS, SEARCHPRODUCT, GETUSER, GETLOGOUT } from '../../redux/action/action';

const NavBar = ({ name, setName }) => {
    const allRubros = useSelector((state) => state.rootReducer.rubro)
    const user= JSON.parse(localStorage.getItem("login"))

    const dispatch = useDispatch()
    const navigate = useNavigate()
    // console.log(user)
    function handleFilter(e) {
        if (e) {
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

    function handleLogout(e){
        e.preventDefault();
        dispatch(GETLOGOUT())
        navigate('/')
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
                    {
                        user ?
                            <Flex ml='40%'>
                                <Button onClick={e =>{handleLogout(e)}} w='7em' mr='.5em' bgGradient='linear(to-r, rgba(1,173,178,1) 10%, rgba(7,95,171,1) 88%)'>Logout</Button>
                                <Button bgGradient='linear(to-r, rgba(1,173,178,1) 10%, rgba(7,95,171,1) 88%)'><MdOutlineAddShoppingCart /></Button>
                            </Flex>
                            :
                            <Flex ml='7%'>
                                <Button onClick={e => navigate('/login')} w='7em' mr='.5em' bgGradient='linear(to-r, rgba(1,173,178,1) 10%, rgba(7,95,171,1) 88%)'>Login</Button>
                                <Button onClick={e => navigate('/register')} w='7em' mr='.5em' bgGradient='linear(to-r, rgba(1,173,178,1) 10%, rgba(7,95,171,1) 88%)'>Register</Button>
                                <Button bgGradient='linear(to-r, rgba(1,173,178,1) 10%, rgba(7,95,171,1) 88%)'><MdOutlineAddShoppingCart /></Button>
                            </Flex>
                    }

                </Box>
            </Flex>
        </Center>
    )
}

export default NavBar