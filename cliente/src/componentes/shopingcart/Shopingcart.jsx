import * as React from 'react';
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GETPRODUCTS, GETRUBROS, GETUSER } from '../../redux/action/action';
import Banners from '../Banner/Banner'
import NavBar from '../NavBar/Navbar'
import Products from '../Products/Products';
import { Center, Container, Grid, GridItem } from '@chakra-ui/react'
import ProductItem from './ProductItem';



const Shopingcart = () => {
    const dispatch = useDispatch()
    const allProducts = useSelector((state) => state.rootReducer.products)
    const carts = useSelector((state) => state.rootReducer.cart) 
    console.log(carts)
    
    
    function handleDeleteFromCart(){

    }

    function handleClearCart(){

    }

    return (
        <>
        <Banners/>
        <NavBar/>
        {/* {  cart.length?
        cart.map(e=>{
            <ProductItem key={e.id} /> 
                }):
           <p>"holaaa!" </p>
        } */}
        </>
    )
}
export default Shopingcart