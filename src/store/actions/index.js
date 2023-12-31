import { ADD_PRODUCT_TO_BIN, REMOVE_PRODUCT_TO_BIN, CHANGE_COUNT } from '@store/constants/actionTypes'
import { createSlice } from '@reduxjs/toolkit'

export const setProductToBin = product => ({
    type: ADD_PRODUCT_TO_BIN,
    payload: product
})

export const removeProductToBin = productId => ({
    type: REMOVE_PRODUCT_TO_BIN,
    payload: productId
})

export const changeCount = productCount => ({
    type: CHANGE_COUNT,
    payload: productCount
})


