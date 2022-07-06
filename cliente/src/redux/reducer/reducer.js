import { createReducer } from '@reduxjs/toolkit'
import * as actions from '../action/action'
import Cookie from 'js-cookie'


const initialState = {
  products:[],
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
      console.log(state.products,"reducer")
    })
})
export default rootReducer