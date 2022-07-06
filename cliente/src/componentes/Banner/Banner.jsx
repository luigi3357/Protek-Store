import * as React from 'react'
import Banner from '../../assets/banner.png'
import { Image, Center, useMediaQuery } from '@chakra-ui/react'

const Banners=()=>{
    const [isMobile320] = useMediaQuery('(min-width: 320px)')
    const [isScreen600] = useMediaQuery('(min-width: 600px)')
    return(
        <>
        <Center >
        <Image w='95%' mt='4' src={Banner} alt="Banner"></Image>
        </Center>
        </>
    )
}

export default Banners