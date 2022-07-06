import * as React from 'react'
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
    Container,
    Square,
    Flex,
    Box,
    Text,
    Spacer,
    Image

} from '@chakra-ui/react';

const Products = ({
    id,
    title,
    code,
    description,
    image,
    price,
    heading
}) => {
    return (
        <Container bgGradient='linear(to-r, rgba(1,173,178,1) 10%, rgba(7,95,171,1) 88%)' mt='4' borderRadius="md" h='18em' border='1px' borderColor='gray' w='80%'>
            <Text w='100%' fontSize='.9em'>{title}</Text>
            <Image h='10em' src={image} alt="Not Found" />
                <Text>Code: {code}</Text>
                <Spacer />
                <Text>Precio: {price}</Text>
            <Text fontSize='.8em'  >Rubro: {heading}</Text>
            <Text>{description}</Text>
        </Container>
    )
}

export default Products

