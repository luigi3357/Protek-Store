import * as React from 'react';
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
    Container,
    Button,
    Image,
    Center,
    Modal,
    Text,
    Link,
    IconButton,
    InputGroup,
    InputRightElement

} from '@chakra-ui/react'
import {
    Formik,
    Field,
    Form
} from 'formik';
import {
    ArrowLeftIcon
} from '@chakra-ui/icons'
import login from '../../assets/login.png'
import { CREATEUSER } from '../../redux/action/action';


const Register = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [show, setShow] = useState(false)
    const [show2, setShow2] = useState(false)
    const [input, setInput] = useState({
        name: "",
        lastName: "",
        email: "",
        password: "",
        repeatPassword: "",
    })

    function handleInputChange(e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        });
    }
    function handleSubmit() {
        dispatch(CREATEUSER(input))
        setTimeout(() => {
            navigate('/')
        }, 1000)
    }

    const isError = input.email === ''

    const handleClick = () => setShow(!show)
    const handleClick2 = () => setShow2(!show2)

    return (
        <div className='Login2'>

            <Container color='whiteAlpha.900' p='4' fontFamily='san serif' bg='blue.300' borderRadius="md" border='1px' borderColor='gray' w='80%'>
                <Link
                    href='/'
                    border='1px'
                    borderColor='black'
                    bgGradient='linear(to-r, rgba(1,173,178,1) 10%, rgba(7,95,171,1) 88%)'
                    p='2'
                    borderRadius='5px'
                >{<ArrowLeftIcon />}</Link>
                <Center><Text bgGradient="linear(to-l, #7928CA, #FF0080)" bgClip="text" fontSize='2em'>Register</Text></Center>
                <Center>
                    <Image
                        //   borderRadius='full'
                        boxSize='100px'
                        src={login}
                        alt='Dan Abramov'
                    />
                </Center>
                <Formik
                    initialValues={input}
                    onSubmit={(e) => { handleSubmit(e) }}
                >
                    {(props) => (
                        <Form>
                            <Center >
                                <FormControl w='60%' isInvalid={isError}>
                                    <FormLabel fontSize='1em' htmlFor='name'>Name</FormLabel>
                                    <Input
                                        id='name'
                                        name='name'
                                        value={input.name}
                                        placeholder='Name'
                                        h='2em'
                                        bg='white'
                                        onChange={handleInputChange}
                                    />
                                    <FormLabel fontSize='1em' htmlFor='lastName'>Last Name</FormLabel>
                                    <Input
                                        color='black'
                                        id='lastName'
                                        name='lastName'
                                        value={input.lastName}
                                        placeholder='Last Name'
                                        h='2em'
                                        bg='white'
                                        onChange={handleInputChange}
                                    />

                                    <FormLabel fontSize='1em' htmlFor='email'>Email</FormLabel>
                                    <Input
                                        color='black'
                                        id='email'
                                        type='email'
                                        name='email'
                                        value={input.email}
                                        placeholder='Email'
                                        bg='white'
                                        h='2em'
                                        onChange={handleInputChange}
                                    />
                                    {/* {isError.email ? (
                            <FormHelperText>
                                Enter the email for Login.
                            </FormHelperText>
                        ) : (
                            <FormErrorMessage>Email is required.</FormErrorMessage>
                        )} */}
                                </FormControl>
                            </Center>

                            <Center>
                                <FormControl w='60%' isInvalid={isError}>
                                    <FormLabel fontSize='1em' htmlFor='email'>Password</FormLabel>
                                    <InputGroup size='md'>
                                        <Input
                                            color='black'
                                            // _placeholder={{ color: 'black' }}
                                            border='1px'
                                            borderColor='black'
                                            id='password'
                                            type={show ? 'text' : 'password'}
                                            name='password'
                                            value={input.password}
                                            placeholder='Enter password'
                                            pr='4.5rem'
                                            bg='white'
                                            onChange={handleInputChange}
                                        />
                                        <InputRightElement width='4.5rem'>
                                            <Button
                                                bgGradient='linear(to-r, rgba(1,173,178,1) 10%, rgba(7,95,171,1) 88%)'
                                                h='1.75rem' size='sm' onClick={handleClick}>
                                                {show ? 'Hide' : 'Show'}
                                            </Button>
                                        </InputRightElement>
                                    </InputGroup>
                                    <FormLabel fontSize='1em' htmlFor='repeatPassword'>Repeat Password</FormLabel>
                                    <InputGroup size='md'>
                                        <Input
                                            color='black'
                                            // _placeholder={{ color: 'black' }}
                                            border='1px'
                                            borderColor='black'
                                            id='repeatPassword'
                                            type={show2 ? 'text' : 'password'}
                                            name='repeatPassword'
                                            value={input.repeatPassword}
                                            placeholder='Repeat password'
                                            pr='4.5rem'
                                            bg='white'
                                            onChange={handleInputChange}
                                        />
                                        <InputRightElement width='4.5rem'>
                                            <Button
                                                bgGradient='linear(to-r, rgba(1,173,178,1) 10%, rgba(7,95,171,1) 88%)'
                                                h='1.75rem' size='sm' onClick={handleClick2}>
                                                {show2 ? 'Hide' : 'Show'}
                                            </Button>
                                        </InputRightElement>
                                    </InputGroup>
                                    {/* {!isError ? (
                            <FormHelperText>
                                Enter the email you'd like to receive the newsletter on.
                            </FormHelperText>
                        ) : (
                            <FormErrorMessage>Email is required.</FormErrorMessage>
                        )} */}
                                </FormControl>
                            </Center>

                            <Center>
                                <Button
                                    w='60%'
                                    mt={4}
                                    // colorScheme='blue'
                                    border='1px'
                                    borderColor='black'
                                    bgGradient='linear(to-r, rgba(1,173,178,1) 10%, rgba(7,95,171,1) 88%)'
                                    // isLoading={props.isSubmitting}
                                    type='submit'
                                    h='2em'
                                >
                                    Submit
                                </Button>
                            </Center>
                        </Form>
                    )}
                </Formik>
                {/* <Center><Link fontSize='.8em'>Forgot your password?</Link></Center> */}
                {/* <Center><Link pt='1em' fontSize='.8em'>You have a account?</Link></Center> */}
                <Center>
                    {/* <Button
                        w='60%'
                        mt={4}
                        // colorScheme='blue'
                        border='1px'
                        borderColor='black'
                        bgGradient='linear(to-r, rgba(1,173,178,1) 10%, rgba(7,95,171,1) 88%)'
                        // isLoading={props.isSubmitting}
                        type='submit'
                        h='2em'
                    >
                        Sign up
                    </Button> */}
                </Center>
            </Container>
        </div>
    )
}
export default Register