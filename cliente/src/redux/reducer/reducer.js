import { createReducer } from '@reduxjs/toolkit'
import * as actions from '../action/action'
import Cookie from 'js-cookie'


const initialState = {
  products: [],
  rubro: [],
  users: []
}

const rootReducer = createReducer(initialState, (builder) => {
  builder
    /////////////////////////////////////   
    //      ACCIONES PARA PRODUCTOS    //   
    ///////////////////////////////////// 

    .addCase(actions.GETPRODUCTS.fulfilled, (state, action) => {
      state.products = []
      state.products = action.payload
    })
    .addCase(actions.GETRUBROS.fulfilled, (state, action) => {
      state.rubro = []
      state.rubro = action.payload
    })
    .addCase(actions.FILTERRUBROS.fulfilled, (state, action) => {
      state.products = []
      state.products = action.payload
    })
    .addCase(actions.SEARCHPRODUCT.fulfilled, (state, action) => {
      state.products = []
      state.products = action.payload
    })

    /////////////////////////////////////   
    //      ACCIONES PARA USUARIOS    //   
    ///////////////////////////////////// 

    .addCase(actions.CREATEUSER.fulfilled, (state, action) => {
      localStorage.setItem('login',JSON.stringify(action.payload))
      state.users = []
      state.users = action.payload      
    })
    .addCase(actions.SEARCHUSER.fulfilled, (state, action) => {
      localStorage.setItem('login',JSON.stringify(action.payload))
      state.users = []
      state.users = action.payload      
    })
    .addCase(actions.GETUSER.fulfilled, (state, action) => {
      state.users = []
      state.users = action.payload      
    })
    .addCase(actions.GETLOGOUT.fulfilled, (state, action) => {
      localStorage.setItem('login',JSON.stringify(null))
      state.users = []
    })
})

export default rootReducer