import { omit } from 'lodash'
import { ADD_PRODUCT_TO_BIN, REMOVE_PRODUCT_TO_BIN} from '@store/constants/actionTypes'

const initialState = {}


const favoriteReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PRODUCT_TO_BIN:
            return {
                ...state,
                ...action.payload
            }

        case REMOVE_PRODUCT_TO_BIN:
            return omit(state, [action.payload])
        default:
            return state;
    }
}

export default favoriteReducer