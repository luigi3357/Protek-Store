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


const Login = () => {
    const navigate = useNavigate()
    const [show, setShow] = useState(false)
    const [input, setInput] = useState({
        email: "",
        password: ""
    })

    function handleInputChange(e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        });
    }

    console.log(input)
    const isError = input.email === ''

    const handleClick = () => setShow(!show)

    return (
        <div className='Login'>

            <Container color='whiteAlpha.900' p='4' fontFamily='san serif' bg='blue.300' borderRadius="md" border='1px' borderColor='gray' w='80%'>
                <Link
                    href='/'
                    border='1px'
                    borderColor='black'
                    bgGradient='linear(to-r, rgba(1,173,178,1) 10%, rgba(7,95,171,1) 88%)'
                    p='2'
                    borderRadius='5px'
                >{<ArrowLeftIcon />}</Link>
                <Center><Text bgGradient="linear(to-l, #7928CA, #FF0080)" bgClip="text" fontSize='3em'>Welcome</Text></Center>
                <Center>
                    <Image
                        //   borderRadius='full'
                        boxSize='150px'
                        src={login}
                        alt='Dan Abramov'
                    />
                </Center>
                <Formik
                    initialValues={input}
                    onSubmit={(values, actions) => {
                        setTimeout(() => {
                            alert(JSON.stringify(values, null, 2))
                            actions.setSubmitting(false)
                        }, 1000)
                    }}
                >
                    {(props) => (
                        <Form>
                            <Center >
                                <FormControl w='60%' isInvalid={isError}>
                                    <FormLabel fontSize='1.2em' htmlFor='email'>Email</FormLabel>
                                    <Input
                                        id='email'
                                        type='email'
                                        name='email'
                                        value={input.email}
                                        placeholder='Email'
                                        onChange={handleInputChange}
                                        bg='white'
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
                                    <FormLabel fontSize='1.2em' htmlFor='email'>Password</FormLabel>
                                    <InputGroup size='md'>
                                        <Input
                                            // _placeholder={{ color: 'black' }}
                                            border='1px'
                                            borderColor='black'
                                            id='password'
                                            type={show ? 'text' : 'password'}
                                            name='password'
                                            value={input.password}
                                            placeholder='Enter password'
                                            onChange={handleInputChange}
                                            pr='4.5rem'
                                            bg='white'
                                        />
                                        <InputRightElement width='4.5rem'>
                                            <Button
                                                bgGradient='linear(to-r, rgba(1,173,178,1) 10%, rgba(7,95,171,1) 88%)'
                                                h='1.75rem' size='sm' onClick={handleClick}>
                                                {show ? 'Hide' : 'Show'}
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
                                    isLoading={props.isSubmitting}
                                    type='submit'
                                >
                                    Submit
                                </Button>
                            </Center>
                        </Form>
                    )}
                </Formik>
                <Center><Link fontSize='1em'>Forgot your password?</Link></Center>
                <Center><Text fontSize='1em'>You do not have an account?</Text></Center>
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
                    >
                        Sign up
                    </Button>
                </Center>
            </Container>
        </div>
    )
}
export default Login