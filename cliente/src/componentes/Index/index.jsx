import * as React from 'react';
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GETPRODUCTS } from '../../redux/action/action';
import Banners from '../Banner/Banner'
import NavBar from '../NavBar/Navbar'
import Products from '../Products/Products';
import { Center, Container, Grid, GridItem } from '@chakra-ui/react'



const Index = () => {
    const dispatch = useDispatch()
    const allProducts = useSelector((state) => state.rootReducer.products)
    console.log(allProducts, "soy el index")

    useEffect(() => {
        dispatch(GETPRODUCTS())
    }, [dispatch]);


    return (
        <>
            <Banners />
            <NavBar />
            <Center>
                <Grid w='95%' templateColumns='repeat(3, 1fr)' gap={6}>
                    {
                        allProducts?.map(e => {
                            return (
                                <GridItem>
                                    <Products
                                        id={e.id}
                                        title={e.title}
                                        code={e.codigo}
                                        description={e.descripcion}
                                        image={e.image}
                                        price={e.precio}
                                        heading={e.rubro}
                                    />
                                </GridItem>
                            )
                        })
                    }
                </Grid>
            </Center>
        </>
    )
}
export default Index