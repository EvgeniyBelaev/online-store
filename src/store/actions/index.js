import { ADD_PRODUCT_TO_BIN, REMOVE_PRODUCT_TO_BIN} from '@store/constants/actionTypes'

export const setProductToBin = () => ({
    type: ADD_PRODUCT_TO_BIN,
    payload: ''
})
export const removeProductToBin = () => ({
    type: REMOVE_PRODUCT_TO_BIN,
    payload: ''
})