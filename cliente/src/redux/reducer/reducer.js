import { createReducer } from '@reduxjs/toolkit'
import * as actions from '../action/action'
import Cookie from 'js-cookie'


const initialState = {
  products:[],
  rubro:[],
  users:[]
}

const rootReducer = createReducer(initialState, (builder) => {
  builder
                          /////////////////////////////////////   
                         //      ACCIONES PARA PRODUCTOS    //   
                        ///////////////////////////////////// 

    .addCase(actions.GETPRODUCTS.fulfilled, (state, action) => {
      state.products=[]
      state.products=action.payload
    })
    .addCase(actions.GETRUBROS.fulfilled, (state, action) => {
      state.rubro=[]
      state.rubro=action.payload
    })
    .addCase(actions.FILTERRUBROS.fulfilled, (state, action) => {
      state.products=[]
      state.products=action.payload
    })
    .addCase(actions.SEARCHPRODUCT.fulfilled, (state, action) => {
      state.products=[]
      state.products=action.payload
    })
})
export default rootReducer