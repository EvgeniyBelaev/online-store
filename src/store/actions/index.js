import { ADD_PRODUCT_TO_BIN, REMOVE_PRODUCT_TO_BIN} from '@store/constants/actionTypes'

export const setProductToBin = product => ({
    type: ADD_PRODUCT_TO_BIN,
    payload: product
})

export const removeProductToBin = productId => ({
    type: REMOVE_PRODUCT_TO_BIN,
    payload: productId
})