import * as React from 'react'
import {
    Button,
    Container,
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
        <Container 
        color='aliceblue' 
        // h='24em' 
        pb='45px'
        fontFamily='san serif' 
        bg='rgba(7,95,171,1) 88%' 
        mt='4' 
        borderRadius="md" 
        border='1px' 
        borderColor='gray' 
        w='80%'>
            <Text w='100%' fontSize='.8em'>{title}</Text>
            <Image h='10em' src={image} alt="Not Found" />
            <Text>Code: {code}</Text>
            <Spacer />
            <Text>Precio: {price}</Text>
            <Text fontSize='.8em'>Rubro: {heading}</Text>
            <Text>{description}</Text>
                <Button color='black' w='100%' border='1px' borderColor='black' mb='2' bgGradient='linear(to-r, rgba(1,173,178,1) 10%, rgba(7,95,171,1) 88%)'>Comprar Ahora</Button>
                <Button color='black' w='100%' border='1px' borderColor='black' mb='2' bgGradient='linear(to-r, rgba(1,173,178,1) 10%, rgba(7,95,171,1) 88%)'>Agregar Al Carrito</Button>
        </Container>
    )
}

export default Products

