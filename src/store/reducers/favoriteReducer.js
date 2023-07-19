import { omit } from 'lodash'
import { ADD_PRODUCT_TO_BIN, REMOVE_PRODUCT_TO_BIN, CHANGE_COUNT } from '@store/constants/actionTypes'
import { getLocalStorage } from '@utils/localStorage'

const initialState = getLocalStorage('store')


const favoriteReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PRODUCT_TO_BIN:
            return {
                ...state,
                ...action.payload
            }
            
            case REMOVE_PRODUCT_TO_BIN:
                return omit(state, [action.payload])

            case CHANGE_COUNT:
                console.log(Object.entries(state))

        default:
            return state;
    }
}

export default favoriteReducer