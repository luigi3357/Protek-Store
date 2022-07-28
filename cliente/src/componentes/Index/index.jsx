import * as React from 'react';
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GETPRODUCTS, GETRUBROS, GETUSER } from '../../redux/action/action';
import Banners from '../Banner/Banner'
import NavBar from '../NavBar/Navbar'
import Products from '../Products/Products';
import { Center, Container, Grid, GridItem } from '@chakra-ui/react'
import './index.css'



const Index = () => {
    const dispatch = useDispatch()
    const allProducts = useSelector((state) => state.rootReducer.products)
    const user = useSelector((state) => state.rootReducer.users)
    const [name, setName]= useState()


    useEffect(() => {
        dispatch(GETPRODUCTS());
        dispatch(GETRUBROS());
    }, [dispatch]);

      


    return (
        <>
            <Banners />
            <div className="navbar">
            <NavBar name={name} setName={setName} />
            </div>
            <Center>
                <Grid w='95%' templateColumns='repeat(3, 1fr)' gap={6}>
                    {
                        allProducts?.map(e => {
                            return (
                                <GridItem key={e.id}>
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