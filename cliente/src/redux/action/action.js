import axios from "axios"
import { createAction, createAsyncThunk } from "@reduxjs/toolkit"
import Cookie from 'js-cookie'

export const api = 'http://localhost:3001'

/////////////////////////////////////   
//      ACCIONES PARA PRODUCTOS    //   
/////////////////////////////////////  

export const GETPRODUCTS = createAsyncThunk('GETPRODUCTS', async () => { //trae todos los productos
    const response = await axios(`${api}/product`)
    return response.data
})

export const GETRUBROS = createAsyncThunk('GETRUBROS', async () => { //trae todos los rubros
    const response = await axios(`${api}/get-rubro`)
    return response.data
})

export const FILTERRUBROS = createAsyncThunk('FILTERRUBROS', async (rubro) => { //filtra los rubros desde la db
    const response = await axios(`${api}/product/${rubro}`)
    return response.data
})
export const SEARCHPRODUCT = createAsyncThunk('SEARCHPRODUCT', async (title) => { //filtra los rubros desde la db
    const response = await axios(`${api}/product?title=${title}`)
    return response.data
})

/////////////////////////////////////   
//      ACCIONES PARA USUARIOS     //  
/////////////////////////////////////

export const CREATEUSER = createAsyncThunk('CREATEUSER', async (payload) => { 
    const response = await axios.post(`${api}/register`, payload)
    return response.data
})
export const SEARCHUSER = createAsyncThunk('SEARCHUSER', async (payload) => { 
    const response = await axios.post(`${api}/login`, payload)
    return response.data
})
export const GETUSER = createAsyncThunk('GETUSER', async (payload) => { 
    const response = await axios(`${api}/user?email=${payload}`)
    return response.data
})

export const GETLOGOUT = createAsyncThunk('GETLOGOUT',async ()=>{
    console.log('entre al logout')
})