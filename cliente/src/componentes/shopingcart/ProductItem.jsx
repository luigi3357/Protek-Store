import * as React from 'react'
import {
    Button,
    Container,
    Text,
    Spacer,
    Image,
    Center
} from '@chakra-ui/react';
import { ADD_TO_CART } from '../../redux/action/action';

const ProductItem = ({
    id,
    title,
    code,
    description,
    image,
    price,
    heading
}) => {

   
    return (
        <Center
        color='aliceblue' 
        // h='24em' 
        // pb='45px'
        w='100%'
        fontFamily='san serif' 
        bg='rgba(7,95,171,1) 88%' 
        mt='4' 
        borderRadius="md" 
        border='1px' 
        borderColor='gray' 
        >
            <Text fontSize='.8em'>{title}</Text>
            <Image src={image} alt="Not Found" />
            <Text>Code: {code}</Text>
            {/* <Spacer /> */}
            <Text>Precio: {price}</Text>
            <Text fontSize='.8em'>Rubro: {heading}</Text>
            <Text>{description}</Text>
                <Button color='black' border='1px' borderColor='black' bgGradient='linear(to-r, rgba(1,173,178,1) 10%, rgba(7,95,171,1) 88%)'></Button>
                <Button color='black' border='1px' borderColor='black' bgGradient='linear(to-r, rgba(1,173,178,1) 10%, rgba(7,95,171,1) 88%)'></Button>
        </Center>
    )
}

export default ProductItem

